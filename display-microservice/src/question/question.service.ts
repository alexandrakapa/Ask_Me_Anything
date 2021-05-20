import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>) {}

  // findAll(): Promise<Question[]> {
  //   return this.questionRepo.find();
  // }

  findAll(): Promise<Question[]> {
    return this.questionRepo.find({ relations: ["answers"] });
  }

  create(newQuestion){
    this.questionRepo.insert(newQuestion)
  }
}
