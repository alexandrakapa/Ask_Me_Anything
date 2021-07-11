import { Injectable } from '@nestjs/common';

import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Keyword } from '../keyword/keyword.entity';
import { EntityManager, getManager, Repository } from "typeorm";
import { Answer } from './answer.entity';
import { Question } from '../question/question.entity';

@Injectable()
export class AnswerService {

  constructor(@InjectRepository(Answer) private answerRepo: Repository<Answer>,
              @InjectEntityManager() private answerManager: EntityManager) {}

  findAll(): Promise<Answer[]> {
    return this.answerRepo.find();
  }

  async make_answer(id, text, user, date, quid) {
    const answers = [];
    const new_answer = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Answer)
      .values([
        {
          answer_id: id,
          text: text,
          answeredFrom: user,
          answeredOn: date,
          isAnAnswerOf: quid,
        },
      ])
      .execute();

    answers.push(new_answer);
    // const cur_key = await getManager()
    //   .createQueryBuilder()
    //   .update(Question)
    //   // .set({ answers: answers })
    //   .where('id = :id', { id: quid })
    //   .execute();
    console.log("ok2");
    return 'ok';
  }
  async findAnswersByQuestionId(isAnAnswerOf: any): Promise<Answer[]> {    //returns all answers by question id
    return this.answerManager.find(Answer, {isAnAnswerOf});
  }

  async findByDayUser(user): Promise<Answer[]> {
    const qb = await this.answerRepo
      .createQueryBuilder("answer")
      .select(`DATE_TRUNC('day', "answeredOn") AS answers_per_day, COUNT(answer_id) AS count`)
      .where(`answer.answeredFrom = ${user}`)
      .groupBy(`DATE_TRUNC('day',"answeredOn")`)
      .orderBy(`answers_per_day`)
    // console.log(qb.getSql())
    return qb.getRawMany()
  }

  create(newAnswer){
    this.answerRepo.insert(newAnswer)
  }
}
