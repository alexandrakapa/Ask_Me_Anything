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
  @Get('some_answers')
  async getSomeAnswers():Promise<Question[]>{  //for display
    return await this.questionService.findSome();
  }

  @Get('andkeywords')
  async getAllKeywords():Promise<Question[]>{  //for display
    return await this.questionService.findAllKeywords();
  }

  @Get('/byId/:question_id')
  findOneById(@Param('question_id', ParseIntPipe) question_id: number): Promise<Question> {
    return this.questionService.findQuestionById(question_id);
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

  @Get('statistics/byDay/:user')
  async getByDayUser(@Param('user') user):Promise<Question[]>{
    return await this.questionService.findByDayUser(user)
  }

  @Get('statistics/byKeyword/:user')
  async getByKeywordUser(@Param('user') user):Promise<Question[]>{
    return await this.questionService.findByKeywordUser(user)
  }

}
