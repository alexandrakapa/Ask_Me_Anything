import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Answer } from './answer.entity';
import { Keyword } from '../keyword/keyword.entity';
import { Question } from '../question/question.entity';

@Injectable()
export class AnswerService {


  // findAll(): Promise<Answer[]> {
  //   return this.answerRepo.find();
  // }

  // findAll(): Promise<Answer[]> {
  //   return this.answerRepo.find({ relations: ["company"] });
  // }

  // create(newAnswer) {
  //   this.answerRepo.insert(newAnswer);
  // }
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
  }
}
