import { BadRequestException, Get, HttpService, Injectable, NotFoundException, OnModuleInit, Param } from "@nestjs/common";
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, getManager } from "typeorm";
import { Question } from '../question/question.entity';
import { Answer } from '../answer/entities/answer.entity';
import { RedisService } from "nestjs-redis";

@Injectable()
export class AnswerService implements OnModuleInit {
  constructor(@InjectEntityManager() private manager: EntityManager,private readonly redisService:RedisService,private httpService: HttpService,
  ) {}
  async onModuleInit() {
    const client = await this.redisService.getClient();

    console.log(`The module has been initialized.`);
    let saved_subs = await client.hget('subscribers','answer-micro');
    const my_addr = 'https://answer-microservice.herokuapp.com/answer/bus';
    if(saved_subs != my_addr){
      let setter = await client.hset('subscribers','answer-micro',my_addr)
    }
  }

  async makeQuestion(given_id){
    const tade = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Question)
      .values([
        { question_id:given_id }
      ])
      .execute();

    return tade;
  }
  async create(CreateAnswerDto: CreateAnswerDto) {
    return this.manager.transaction(async (manager) => {
      const questionId = CreateAnswerDto.isAnAnswerOf;
      if (!questionId)
        throw new BadRequestException('Quiz id missing.');
      const quest = await this.manager.findOne(
        Question,
        questionId,
      );
      if (!quest)
        throw new NotFoundException(`Question ${quest} not found.`);
      console.log("here");
      // const answer = await this.manager.create(Answer, CreateAnswerDto);
      // answer.isAnAnswerOf = quest;
      // console.log(answer);
      // console.log(answer.text);
      // const saved_ans = await this.manager.save(answer);
      // console.log(saved_ans.answer_id);
      const cont = CreateAnswerDto.text;
      console.log("cont: "+cont+" answered from: "+CreateAnswerDto.answeredFrom+" answer of: "+quest);
      const new_answer = await getManager()
        .createQueryBuilder()
        .insert()
        .into(Answer)
        .values([
          {
            text: cont,
            answeredFrom: CreateAnswerDto.answeredFrom,
            isAnAnswerOf: quest,
            answeredOn: CreateAnswerDto.answeredOn,
          },
        ])
        .returning(['answer_id'])
        .execute();
      await this.httpService
        .post('https://choreo-microservice.herokuapp.com/bus', {
          id: new_answer.raw[0].answer_id,
          text: cont,
          answeredFrom: CreateAnswerDto.answeredFrom,
          isAnAnswerOf: quest,
          category: 'answer',
        })
        .toPromise();
    });
    return 'ok';
  }

  findAll() {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }

}
