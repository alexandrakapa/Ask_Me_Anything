import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Answer } from './answer.entity';
import { Question } from '../question/question.entity';

@Injectable()
export class AnswerService {
  constructor(@InjectRepository(Answer) private answerRepo: Repository<Answer>,
              @InjectEntityManager() private answerManager: EntityManager) {}

  findAll(): Promise<Answer[]> {
    return this.answerRepo.find();
  }

  // findAll(): Promise<Answer[]> {
  //   return this.answerRepo.find({ relations: ["company"] });
  // }

  async findAnswersByQuestionId(isAnAnswerOf: any): Promise<Answer[]> {    //returns all answers by question id
    return this.answerManager.find(Answer, {isAnAnswerOf});
  }

  create(newAnswer){
    this.answerRepo.insert(newAnswer)
  }
}
