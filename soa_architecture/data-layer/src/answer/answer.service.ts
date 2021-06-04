import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { Answer } from "./answer.entity";
import { Question } from "../question/question.entity";
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswerService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}

  async createAnswer(CreateAnswerDto: CreateAnswerDto): Promise<Answer> {
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

}
