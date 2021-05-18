import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService){}

  @Get()
  async getAll():Promise<Question[]>{
    return await this.questionService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createQuestion(@Body() newQuestion:any){
    this.questionService.create(newQuestion);
  }
}
