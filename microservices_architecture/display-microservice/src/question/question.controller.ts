import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { QuestionService } from './question.service';
import { Question } from './question.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService){}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll():Promise<Question[]>{
    return await this.questionService.findAll();
  }

  @Get('some_answers')
  async getSomeAnswers():Promise<Question[]>{  //for display
    return await this.questionService.findSome();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user/:askedFrom')
  findOneByUser(@Param('askedFrom', ParseIntPipe) askedFrom: number): Promise<Question> {
    return this.questionService.findQuestionByUser(askedFrom);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user/all/:askedFrom')
  findAllByUser(@Param('askedFrom', ParseIntPipe) askedFrom: number): Promise<Question[]> {
    return this.questionService.findQuestionsByUser(askedFrom);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':question_id')
  findOneById(@Param('question_id', ParseIntPipe) question_id: number): Promise<Question> {
    return this.questionService.findQuestionById(question_id);
  }

}
