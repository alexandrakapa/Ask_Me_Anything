import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { QuestionService } from './question.service';
import { Question } from "./question.entity";

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('andanswers')
  async getAll():Promise<Question[]>{  //for display
    return await this.questionService.findAll();
  }

  @Get('user/all/:askedFrom')  //for showing the question contributions of a user
  findAllByUser(@Param('askedFrom', ParseIntPipe) askedFrom: number): Promise<Question[]> {
    return this.questionService.findAllQuestionsByUser(askedFrom);
  }

  @Post('create') //for creating questions
  async addQuestion(@Body() body: Question) {
    console.log(body.title);
    console.log(body.text);
    console.log(body.askedFrom);
    console.log(body.keywords);

    const generatedId = this.questionService.createQuestion(
      body.title,
      body.text,
      body.askedFrom,
      body.keywords,
    );
  }

  @Get('statistics/byDay')  //for showing statistics by day
  async getByDay():Promise<Question[]>{
    return await this.questionService.findByDay();
  }

  @Get('statistics/byKeyword')
  async getByKeyword():Promise<Question[]>{
    return await this.questionService.findByKeyword();
  }

}
