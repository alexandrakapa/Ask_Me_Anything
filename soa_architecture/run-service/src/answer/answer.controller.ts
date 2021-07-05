import { Body, Controller, Post,Headers } from "@nestjs/common";
import { AnswerService } from './answer.service';
@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create') //to create an answer
  async addAnswer(@Body() body: any, @Headers() headers) {
    console.log("ready to create answer");
    let auth_res = await this.answerService.checkTok(headers.authorization);
    if(auth_res ==1) {
      console.log("got auth, let's procceed!");
      return this.answerService.createAnswer(body);
    }else{
      return "not authorized!";
    }
  }
}
