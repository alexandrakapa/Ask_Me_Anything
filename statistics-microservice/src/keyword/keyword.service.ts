import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../question/question.entity';
import { Repository } from 'typeorm';
import { Keyword } from './keyword.entity';

@Injectable()
export class KeywordService {
  constructor(@InjectRepository(Keyword) private keywordRepo: Repository<Keyword>) {}

  findAll(): Promise<Keyword[]> {
    return this.keywordRepo.find();
  }

  // findAll(): Promise<Employee[]> {
  //   return this.employeeRepo.find({ relations: ["company"] });
  // }

  create(newKeyword){
    this.keywordRepo.insert(newKeyword)
    console.log(newKeyword)
  }
}
