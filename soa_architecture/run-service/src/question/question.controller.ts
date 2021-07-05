import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { QuestionService } from './question.service';
import {Question} from "../../../data-layer/src/question/question.entity";

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

  @Get('find/:questionId')
  async findOneById(@Param('questionId', ParseIntPipe) questionId: number): Promise<any> {
    return this.questionService.findQuestionById(questionId);
  }

}
