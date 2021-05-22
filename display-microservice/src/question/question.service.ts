import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Question } from './question.entity';

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private questionRepo: Repository<Question>,
              @InjectEntityManager() private questionManager: EntityManager) {}

  // findAll(): Promise<Question[]> {
  //   return this.questionRepo.find();
  // }

  findAll(): Promise<Question[]> {
    return this.questionRepo.find({ relations: ["answers"] });
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

  create(newQuestion){
    this.questionRepo.insert(newQuestion)
  }
}
