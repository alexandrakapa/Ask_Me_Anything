import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, getManager, getRepository, Repository } from 'typeorm';
import { Question } from './question.entity';
import { Keyword } from '../keyword/keyword.entity';
import { RedisService } from "nestjs-redis";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private questionRepo: Repository<Question>,@InjectEntityManager() private manager: EntityManager,
    private readonly redisService: RedisService,
  ) {}
  async onModuleInit() {
    const client = await this.redisService.getClient();
    console.log(`The module has been initialized.`);
    let saved_subs = await client.hget('subscribers','statistics');
    console.log("first: "+saved_subs)
    const my_addr = 'https://micro-statistics.herokuapp.com/question/bus';
    if (saved_subs !== my_addr){
       await client.hset('subscribers','statistics',my_addr)
    }
    let sav_subs = await client.hget('subscribers','statistics');
    console.log("second: "+sav_subs)
  }


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


    const question = new Question();
    question.question_id = quest_id
    question.askedFrom = quest_from;
    question.keywords = keys;
    // console.log(question.question_id)
    let saved_qu = await this.manager.save(question);
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


  async findByDayUser(user): Promise<Question[]> {
    const qb = await this.questionRepo
      .createQueryBuilder("question")
      .select(`DATE_TRUNC('day', "askedOn") AS questions_per_day, COUNT(question_id) AS count`)
      .where(`question.askedFrom = ${user}`)
      .groupBy(`DATE_TRUNC('day',"askedOn")`)
      .orderBy(`questions_per_day`)
    console.log(qb.getSql())
    return qb.getRawMany()
  }

  async findByKeywordUser(user): Promise<Question[]> {
    const qb = await this.questionRepo
      .createQueryBuilder("question")
      .select(`keyword.keyword_id,"keyword_phrase", COUNT(question.question_id) AS count`)
      .innerJoin('question_keyword','question_keyword', 'question.question_id = question_keyword.question_id')
      .innerJoin('keyword','keyword', 'question_keyword.keyword_id = keyword.keyword_id')
      .where(`question.askedFrom = ${user}`)
      .groupBy(`keyword.keyword_id`)
      .orderBy(`count`)
    console.log(qb.getSql())
    return qb.getRawMany()
  }

}
