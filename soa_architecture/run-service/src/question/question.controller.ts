import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('andanswers')  //for display
  async getAll():Promise<any>{
    return this.questionService.findAll();
  }

  @Get('user/all/:askedFrom')  //for display
  async getAllQuestionsByUserId(@Param('askedFrom', ParseIntPipe) askedFrom: number):Promise<any>{
    return this.questionService.findAllQuestionsByUserId(askedFrom);
  }

  @Post('create') //to create a question
  async addQuestion(@Body() body: any) {
    console.log(body)
    return this.questionService.createQuestion(body)
  }

}
