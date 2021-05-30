import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Question } from "./question.entity";
import { getManager } from 'typeorm';
import { Keyword } from '../keyword/keyword.entity'

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>,
              @InjectEntityManager() private questionManager: EntityManager) {}

  findAll(): Promise<Question[]> {    //returns all the questions with their answers  //for display
    return this.questionRepo.find({ relations: ["answers"] });
  }


  async findAllQuestionsByUser(askedFrom): Promise<Question[]> {    //returns all questions by user id
    return this.questionManager.find(Question, {askedFrom : askedFrom});
  }

  async createQuestion(title, text, user, keywords) {   //creates a question
    const keys = [];
    if(typeof keywords == "string"){
      const cur_key = await getManager()
        .createQueryBuilder(Keyword, 'keyword')
        .where('keyword_phrase = :phrase', { phrase: keywords })
        .getOne();
      if (cur_key) {
        keys.push(cur_key);
      } else {
        const keyword = new Keyword();
        keyword.keyword_phrase = keywords;
        await this.questionManager.save(keyword);
        keys.push(keyword);
      }
    } else {
      for (let i = 0; i < keywords.length; i++) {
        const cur_key = await getManager()
          .createQueryBuilder(Keyword, 'keyword')
          .where('keyword_phrase = :phrase', { phrase: keywords[i] })
          .getOne();
        if (cur_key) {
          keys.push(cur_key);
        } else {
          const keyword = new Keyword();
          keyword.keyword_phrase = keywords[i];
          await this.questionManager.save(keyword);
          keys.push(keyword);
        }
      }
    }
    const question = new Question();
    question.title = title;
    question.text = text;
    question.askedFrom = user;
    question.keywords = keys;
    // console.log(question.question_id)
    await this.questionManager.save(question);
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

}