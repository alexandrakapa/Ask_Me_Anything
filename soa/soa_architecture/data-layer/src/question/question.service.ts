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

  async findQuestionById(question_id: number): Promise<Question> {  //return one question by question id
    // const question = await this.questionManager.findOne(Question, question_id);
    // console.log(question)
    // if (!question) throw new NotFoundException(`Question ${question_id} not found.`);
    // return question;
    const values = this.questionRepo.createQueryBuilder("question")
        .leftJoinAndSelect("question.askedFrom", "user")
        .select(['question.question_id','question.title','question.text','question.askedOn','user.username'])
        .where("question.question_id = :cur_id", { cur_id: question_id })
        .execute();
    return values;
  }

  findAll(): Promise<Question[]> {    //returns all the questions with their answers  //for display
    // return this.questionRepo.find({ relations: ["answers","askedFrom"] });
    const values = this.questionRepo.createQueryBuilder("question")
        .leftJoinAndSelect("question.answers", "answer")
        .leftJoinAndSelect("question.askedFrom", "user")
        .select(['question.question_id','question.title','question.text','question.askedOn','answer.text','answer.answeredOn','answer.answeredFrom','user.username'])
        .getMany();
        // .execute();
    return values;
  }
  findSome(): Promise<Question[]> {    //returns all 10 recent questions with their answers //for display
    return this.questionRepo.find({ relations: ["answers"] ,order: {
        question_id: "DESC",
      },take: 10});
  }
  async findAllKeywords(): Promise<Question[]> {    //returns all the questions with their keywords //for display
    const qb = await this.questionRepo
        .createQueryBuilder("question")
        .select(`question.question_id,"keyword_phrase"`)
        .innerJoin('question_keyword','question_keyword', 'question.question_id = question_keyword.question_id')
        .innerJoin('keyword','keyword', 'question_keyword.keyword_id = keyword.keyword_id')
        // .groupBy('question.question_id')
    console.log(qb.getSql())
    return qb.getRawMany()
  }


  async findAllQuestionsByUser(askedFrom): Promise<Question[]> {    //returns all questions by user id
    return this.questionManager.find(Question, {askedFrom : askedFrom});
  }

  async createQuestion(title, text, user, keywords) {   //creates a question
    const keys = [];
    if(typeof keywords == "string"){
      console.log("string: "+keywords)
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
        console.log("array: "+keywords)
        console.log("cur: "+keywords[i])

        const cur_key = await getManager()
          .createQueryBuilder(Keyword, 'keyword')
          .where('keyword_phrase = :phrase', { phrase: keywords[i] })
          .getOne();
        if (cur_key) {
          console.log("here true");
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
    // console.log(qb.getSql())
    return qb.getRawMany()
  }

  async findByKeyword(): Promise<Question[]> {
    const qb = await this.questionRepo
        .createQueryBuilder("question")
        .select(`keyword.keyword_id,"keyword_phrase", COUNT(question.question_id) AS count`)
        .innerJoin('question_keyword','question_keyword', 'question.question_id = question_keyword.question_id')
        .innerJoin('keyword','keyword', 'question_keyword.keyword_id = keyword.keyword_id')
        // .groupBy(`keyword.keyword_id,"Keyword_phrase"`)
        .groupBy(`keyword.keyword_id`)
        .orderBy(`count`)
    console.log(qb.getSql())
    return qb.getRawMany()
  }

  async findByDayUser(user): Promise<Question[]> {
    const qb = await this.questionRepo
        .createQueryBuilder("question")
        .select(`DATE_TRUNC('day', "askedOn") AS questions_per_day, COUNT(question_id) AS count`)
        .where(`question.askedFrom = ${user}`)
        .groupBy(`DATE_TRUNC('day',"askedOn")`)
        .orderBy(`questions_per_day`)
    // console.log(qb.getSql())
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
    // console.log(qb.getSql())
    return qb.getRawMany()
  }

}