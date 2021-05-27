import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Question } from '../question/question.entity';
import { Answer } from '../answer/entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async create(CreateAnswerDto: CreateAnswerDto): Promise<Answer> {
    return this.manager.transaction(async (manager) => {
      console.log(CreateAnswerDto);
      const quizId = CreateAnswerDto.isAnAnswerOf;
      if (!quizId)
        throw new BadRequestException('Quiz id missing.');
      const quiz = await this.manager.findOne(
        Question,
        quizId,
      );
      if (!quiz)
        throw new NotFoundException(`Quiz ${quizId} not found.`);
      const answer = await this.manager.create(Answer, CreateAnswerDto);
      answer.isAnAnswerOf = quiz;
      return this.manager.save(answer);
    });
  }

  findAll() {
    return `This action returns all answer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return `This action updates a #${id} answer`;
  }

  remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
