import { BadRequestException, HttpService, Injectable, NotFoundException, OnModuleInit } from "@nestjs/common";
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, getManager } from "typeorm";
import { Question } from '../question/question.entity';
import { Answer } from '../answer/entities/answer.entity';
import { RedisCacheService } from '../redis-cache/redis-cache.service';

@Injectable()
export class AnswerService implements OnModuleInit {
  constructor(@InjectEntityManager() private manager: EntityManager,private cacheManager: RedisCacheService,private httpService: HttpService,
  ) {}
  async onModuleInit() {
    console.log(`The module has been initialized.`);
    const saved_subs = await this.cacheManager.get('subscribers');
    console.log(saved_subs[0]);
    const subs= saved_subs[0].subscribers;
    let found = false;
    const my_addr = 'http://localhost:3003/answer/bus';
    for (let i = 0; i < subs[0].length; i++) {
      if(subs[0][i] == my_addr){
        found=true;
      }
    }
    if(!found){
      subs[0].push(my_addr);
      const new_obj = [
        {
          subscribers: subs,
        },
      ];
      await this.cacheManager.set('subscribers', new_obj);
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
        .post('http://localhost:3200/bus', {
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
