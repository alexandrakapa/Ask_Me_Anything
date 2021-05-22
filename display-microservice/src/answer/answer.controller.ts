import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { AnswerService } from './answer.service';
import { Answer } from './answer.entity';

@Controller('answer')
export class AnswerController {

  constructor(private readonly answerService: AnswerService){}

  @Get()
  async getAll():Promise<Answer[]>{
    return await this.answerService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createAnswer(@Body() newAnswer:any){
    this.answerService.create(newAnswer);
  }
}
