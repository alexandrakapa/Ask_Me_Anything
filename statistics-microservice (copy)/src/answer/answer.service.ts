import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './answer.entity';

@Injectable()
export class AnswerService {
  constructor(@InjectRepository(Answer) private answerRepo: Repository<Answer>) {}

  findAll(): Promise<Answer[]> {
    return this.answerRepo.find();
  }

  // findAll(): Promise<Answer[]> {
  //   return this.answerRepo.find({ relations: ["company"] });
  // }

  create(newAnswer){
    this.answerRepo.insert(newAnswer)
  }
}
