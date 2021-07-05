import { BadRequestException, Injectable, NotFoundException, OnModuleInit } from "@nestjs/common";
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, getManager } from "typeorm";
import { Question } from '../question/question.entity';
import { Answer } from '../answer/entities/answer.entity';
import { RedisCacheService } from '../redis-cache/redis-cache.service';

@Injectable()
export class AnswerService{ // implements OnModuleInit {
  constructor(@InjectEntityManager() private manager: EntityManager,private cacheManager: RedisCacheService) {}
  // async onModuleInit() {
  //   console.log(`The module has been initialized.`);
  //   const saved_subs = await this.cacheManager.get('subscribers');
  //   console.log(saved_subs[0]);
  //   const subs= saved_subs[0].subscribers;
  //   console.log("here: "+subs);
  //   console.log("middle: "+subs[0]);
  //   let found = false;
  //   const my_addr = 'http://localhost:3003/answer/bus';
  //   for (let i = 0; i < subs[0].length; i++) {
  //     if(subs[0][i] == my_addr){
  //       found=true;
  //     }
  //   }
  //   if(!found){
  //     subs[0].push(my_addr);
  //     const new_obj = [
  //       {
  //         subscribers: subs,
  //       },
  //     ];
  //     await this.cacheManager.set('subscribers', new_obj);
  //   }
  // }
  async makeQuestion(given_id){
    await getManager()
      .createQueryBuilder()
      .insert()
      .into(Question)
      .values([
        { question_id:given_id }
      ])
      .execute();
  }
  async create(CreateAnswerDto: CreateAnswerDto): Promise<Answer> {
    return this.manager.transaction(async (manager) => {
      console.log(CreateAnswerDto);
      const quizId = CreateAnswerDto.isAnAnswerOf;
      if (!quizId)
        throw new BadRequestException('Quiz id missing.');
      const quiz = await this.manager.findOne(
        Question,
        quizId,
      );
      if (!quiz)
        throw new NotFoundException(`Quiz ${quizId} not found.`);
      const answer = await this.manager.create(Answer, CreateAnswerDto);
      answer.isAnAnswerOf = quiz;
      return this.manager.save(answer);
    });
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
