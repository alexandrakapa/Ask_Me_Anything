import { Body, Controller, Get, Param, ParseIntPipe, Post,Headers } from "@nestjs/common";
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  // @Get('nikos')
  // async getNikos(){
  //   return "nikos";
  // }

  @Get('andanswers')  //for display
  async getAll( @Headers() headers):Promise<any>{
    console.log("first step:request received!");
    let auth_res = await this.questionService.checkTok(headers.authorization);
    console.log("auth: "+auth_res);
    if(auth_res ==1 ) {
      return this.questionService.findAll();
    }else{
      return "not authorized!";
    }
  }
  @Get('some_answers')  //for display
  async getSomeAnswers( ):Promise<any>{

    return this.questionService.findSome();

  }

  @Get('user/all/:askedFrom')  //for display
  async getAllQuestionsByUserId(@Param('askedFrom', ParseIntPipe) askedFrom: number, @Headers() headers):Promise<any>{
    let auth_res = await this.questionService.checkTok(headers.authorization);
    console.log("auth: "+auth_res);
    if(auth_res ==1) {
      return this.questionService.findAllQuestionsByUserId(askedFrom);
    }else{
      return "not authorized!";
    }
  }

  @Post('create') //to create a question
  async addQuestion(@Body() body: any, @Headers() headers) {
    console.log("ready to create question");
    let auth_res = await this.questionService.checkTok(headers.authorization);
    if(auth_res ==1) {
      console.log("ready to go!");
      return this.questionService.createQuestion(body);
    }else{
      return "not authorized!";
    }
  }

  @Get('find/:questionId')
  async findOneById(@Param('questionId', ParseIntPipe) questionId: number, @Headers() headers): Promise<any> {
    let auth_res = await this.questionService.checkTok(headers.authorization);
    if(auth_res ==1) {
      console.log("ready to go!");
      return this.questionService.findQuestionById(questionId);
    }else{
      return "not authorized!";
    }
  }

}
