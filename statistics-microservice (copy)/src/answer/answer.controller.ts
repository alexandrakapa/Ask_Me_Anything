import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
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
