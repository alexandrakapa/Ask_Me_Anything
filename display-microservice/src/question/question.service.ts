import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, getManager, Repository } from 'typeorm';
import { Question } from './question.entity';
import { Keyword } from '../keyword/keyword.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectEntityManager() private questionManager: EntityManager,
  ) {}


  async make_question_keyword(quest_id,title,text, quest_from, quest_on, keywords) {
    const keys = [];

    for (let i = 0; i < keywords.length; i++) {
      const cur_key = await getManager()
        .createQueryBuilder(Keyword, 'keyword')
        .where('keyword_phrase = :phrase', { phrase: keywords[i].keyword_phrase })
        .getOne();
      if (cur_key) {
        keys.push(cur_key);
      } else {
        const keyword = new Keyword();
        keyword.keyword_phrase = keywords[i].keyword_phrase;
        keyword.keyword_id = keywords[i].keyword_id;
        await this.questionManager.save(keyword);
        keys.push(keyword);
      }
    }

    const new_question = await getManager()
      .createQueryBuilder()
      .insert()
      .into(Question)
      .values([
        {
          question_id: quest_id,
          title: title,
          text: text,
          askedFrom: quest_from,
          askedOn: quest_on,
          keywords: keys,
          // answers:[],
        },
      ]).execute();
    return 'ok';
  }
  // create(newQuestion){
  //   this.questionRepo.insert(newQuestion)
  // }
}
