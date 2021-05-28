import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { getManager } from 'typeorm';
import { Keyword } from '../keyword/keyword.entity';
import { Question } from './entities/question.entity';
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>,
              @InjectEntityManager() private manager: EntityManager) {}

  async createQuestion(title, text, date, user, keywords) {
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
        await this.manager.save(keyword);
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
          await this.manager.save(keyword);
          keys.push(keyword);
        }
      }
    }
    const question = new Question();
    question.title = title;
    question.text = text;
    question.askedOn = date;
    question.askedFrom = user;
    question.keywords = keys;
    // console.log(question.question_id)
    await this.manager.save(question);
  }
  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }


  findAll(): Promise<Question[]> {
    return this.questionRepo.find({relations: ["keywords"]});
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
