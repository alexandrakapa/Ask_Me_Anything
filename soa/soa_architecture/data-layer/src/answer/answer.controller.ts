import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import { AnswerService } from './answer.service';
import { Answer } from "./answer.entity";
import { CreateAnswerDto } from "./dto/create-answer.dto";
import {Question} from "../question/question.entity";

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create')
  addAnswer(@Body() createQuizDto: CreateAnswerDto): Promise<Answer> {
    return this.answerService.createAnswer(createQuizDto);
  }

  @Get('all/:isAnAnswerOf')
  findAllByQuestionId(@Param('isAnAnswerOf', ParseIntPipe) isAnAnswerOf: number): Promise<Answer[]> {
    return this.answerService.findAnswersByQuestionId(isAnAnswerOf);
  }

  @Get('statistics/byDay/:user')
  async getByDayUser(@Param('user') user):Promise<Answer[]>{
    return await this.answerService.findByDayUser(user)
  }
}
