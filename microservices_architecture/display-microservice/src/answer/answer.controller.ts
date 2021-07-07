import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { AnswerService } from './answer.service';
import { Answer } from './answer.entity';
import { AuthGuard } from "@nestjs/passport";

@Controller('answer')
export class AnswerController {

  constructor(private readonly answerService: AnswerService){}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll():Promise<Answer[]>{
    return await this.answerService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  @HttpCode(201)
  createAnswer(@Body() newAnswer:any){
    this.answerService.create(newAnswer);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('all/:isAnAnswerOf')
  findAllByQuestionId(@Param('isAnAnswerOf', ParseIntPipe) isAnAnswerOf: number): Promise<Answer[]> {
    return this.answerService.findAnswersByQuestionId(isAnAnswerOf);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('byDay/:user')
  async getByDayUser(@Param('user') user):Promise<Answer[]>{
    return await this.answerService.findByDayUser(user)
  }
}
