import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, getManager, getRepository, Repository } from 'typeorm';
import { Question } from './question.entity';
import { RedisCacheService } from '../redis-cache/redis-cache.service';
import { Keyword } from '../keyword/keyword.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,@InjectEntityManager() private manager: EntityManager,
    private cacheManager: RedisCacheService,
  ) {}
  async onModuleInit() {
    console.log(`The module has been initialized.`);
    const saved_subs = await this.cacheManager.get('subscribers');
    console.log(saved_subs[0]);
    const subs = saved_subs[0].subscribers;
    let found = false;
    const my_addr = 'http://localhost:3001/question/bus';
    for (let i = 0; i < subs[2].length; i++) {
      if (subs[2][i] == my_addr) {
        found = true;
      }
    }
    if (!found) {
      subs[2].push(my_addr);
      const new_obj = [
        {
          subscribers: subs,
        },
      ];
      await this.cacheManager.set('subscribers', new_obj);
    }
  }
  // findAll(): Promise<Question[]> {
  //   return this.questionRepo.find();
  // }

  async findAll(): Promise<Question[]> {
    return this.questionRepo.find();
  }

  async create(newQuestion) {
    await this.questionRepo.insert(newQuestion);
  }

  async make_question_keyword(quest_id, quest_from, quest_on, keywords) {
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
        await this.manager.save(keyword);
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

          askedFrom: quest_from,
          askedOn: quest_on,
          keywords: keys,
        },
      ]).execute();
    return "ok";
  }

  async findByDay(): Promise<Question[]> {
    const qb = await this.questionRepo
      .createQueryBuilder('question')
      .select(
        `DATE_TRUNC('day', "askedOn") AS questions_per_day, COUNT(question_id) AS count`,
      )
      .groupBy(`DATE_TRUNC('day',"askedOn")`)
      .orderBy(`questions_per_day`);
    console.log(qb.getSql());
    return qb.getRawMany();
  }

  async findByKeyword(): Promise<Question[]> {
    const qb = await this.questionRepo
      .createQueryBuilder('question')
      .select(
        `keyword.keyword_id,"keyword_phrase", COUNT(question.question_id) AS count`,
      )
      .innerJoin(
        'question_keyword',
        'question_keyword',
        'question.question_id = question_keyword.question_id',
      )
      .innerJoin(
        'keyword',
        'keyword',
        'question_keyword.keyword_id = keyword.keyword_id',
      )
      // .groupBy(`keyword.keyword_id,"keyword_phrase"`)
      .groupBy(`keyword.keyword_id`)
      .orderBy(`count`);
    console.log(qb.getSql());
    return qb.getRawMany();
  }
}
