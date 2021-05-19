import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>) {}

  // findAll(): Promise<Question[]> {
  //   return this.questionRepo.find();
  // }

  async findAll(): Promise<Question[]> {
    return this.questionRepo.find({ relations: ["answers"] });
  }

  async create(newQuestion){
    await this.questionRepo.insert(newQuestion)
  }

  async findByDay(): Promise<Question[]> {
    const qb = await this.questionRepo
      .createQueryBuilder("question")
      .select(`DATE_TRUNC('day', "askedOn") AS questions_per_day, COUNT(question_id) AS count`)
      .groupBy(`DATE_TRUNC('day',"askedOn")`)
      .orderBy(`questions_per_day`)
    console.log(qb.getSql())
    return qb.getRawMany()
  }

  async findByKeyword(): Promise<Question[]> {
    const qb = await this.questionRepo
      .createQueryBuilder("question")
      .select(`keyword.keyword_id,"Keyword_phrase", COUNT(question.question_id) AS count`)
      .innerJoin('question_keyword','question_keyword', 'question.question_id = question_keyword.question_id')
      .innerJoin('keyword','keyword', 'question_keyword.keyword_id = keyword.keyword_id')
      // .groupBy(`keyword.keyword_id,"Keyword_phrase"`)
      .groupBy(`keyword.keyword_id`)
      .orderBy(`count`)
    console.log(qb.getSql())
    return qb.getRawMany()
  }

}
