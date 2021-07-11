import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, getManager, Repository } from 'typeorm';
import { Question } from './question.entity';
import { Keyword } from '../keyword/keyword.entity';

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>,
    @InjectEntityManager() private questionManager: EntityManager,
  ) {}

  findAll(): Promise<Question[]> {
    return this.questionRepo.find({ relations: ["answers"] });
  }
  findSome(): Promise<Question[]> {    //returns all 10 recent questions with their answers //for display
    return this.questionRepo.find({ relations: ["answers"] ,order: {
        question_id: "DESC",
      },take: 10});
  }

  async findQuestionByUser(askedFrom: number): Promise<Question> {    //returns one question by user id
    const question = await this.questionManager.findOne(Question, {askedFrom});
    if (!question) throw new NotFoundException(`Question ${askedFrom} not found.`);
    return question;
  }

  async findQuestionsByUser(askedFrom: number): Promise<Question[]> {    //returns all questions by user id
    return this.questionManager.find(Question, {askedFrom});
  }

  async findQuestionById(question_id: number): Promise<Question> {  //return one question by question id
    const question = await this.questionManager.findOne(Question, question_id);
    if (!question) throw new NotFoundException(`Question ${question_id} not found.`);
    return question;
  }


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


    const question = new Question();
    question.question_id = quest_id
    question.title = title;
    question.text = text;
    question.askedOn =quest_on;
    question.askedFrom = quest_from;
    question.keywords = keys;
    // console.log(question.question_id)
    let saved_qu = await this.questionManager.save(question);
    return 'ok';
  }
  // create(newQuestion){
  //   this.questionRepo.insert(newQuestion)
  // }
}
