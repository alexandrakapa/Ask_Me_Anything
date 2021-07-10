import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import {InjectEntityManager, InjectRepository} from "@nestjs/typeorm";
import {EntityManager, Repository} from "typeorm";
import { Answer } from "./answer.entity";
import { CreateAnswerDto } from './dto/create-answer.dto';
import {Question} from "../question/question.entity";

@Injectable()
export class AnswerService {
  constructor(@InjectRepository(Answer) private answerRepo: Repository<Answer>,
              @InjectEntityManager() private manager: EntityManager) {}

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

  async findAnswersByQuestionId(isAnAnswerOf: any): Promise<Answer[]> {    //returns all answers by question id
    // return this.manager.find(Answer, {isAnAnswerOf});
    const values = this.answerRepo.createQueryBuilder("answer")
        .leftJoinAndSelect("answer.answeredFrom", "user")
        .select(['answer.answer_id','answer.text','answer.answeredOn','user.username'])
        .where("answer.isAnAnswerOf = :quid", { quid: isAnAnswerOf })
        .execute();
    return values;
  }

  async findByDayUser(user): Promise<Answer[]> {
    const qb = await this.answerRepo
        .createQueryBuilder("answer")
        .select(`DATE_TRUNC('day', "answeredOn") AS answers_per_day, COUNT(answer_id) AS count`)
        .where(`answer.answeredFrom = ${user}`)
        .groupBy(`DATE_TRUNC('day',"answeredOn")`)
        .orderBy(`answers_per_day`)
    // console.log(qb.getSql())
    return qb.getRawMany()
  }
}
