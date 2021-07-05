import { Injectable } from '@nestjs/common';

import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Keyword } from '../keyword/keyword.entity';
import { EntityManager, Repository } from 'typeorm';
import { Answer } from './answer.entity';
import { Question } from '../question/question.entity';

@Injectable()
export class AnswerService {

  constructor(@InjectRepository(Answer) private answerRepo: Repository<Answer>,
              @InjectEntityManager() private answerManager: EntityManager) {}



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
    return 'ok';
  async findAnswersByQuestionId(isAnAnswerOf: any): Promise<Answer[]> {    //returns all answers by question id
    return this.answerManager.find(Answer, {isAnAnswerOf});
  }

  create(newAnswer){
    this.answerRepo.insert(newAnswer)
  }
}
