import { Controller, Get,Headers } from "@nestjs/common";
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('statistics/byDay')  //for statistics by day
  async getByDay(@Headers() head):Promise<any>{
    let auth_res = await this.questionService.checkTok(head.authorization);
    console.log("auth: "+auth_res);
    if(auth_res ==1) {
      return this.questionService.findByDay();
    }else{
      return "not authorized!";
    }
  }

  @Get('statistics/byKeyword')  //for statistics by keyword
  async getByKeyword(@Headers() head):Promise<any>{
    let auth_res = await this.questionService.checkTok(head.authorization);
    console.log("auth: "+auth_res);
    if(auth_res ==1) {
      return this.questionService.findByKeyword();
    }else{
      return "not authorized!";
    }
  }
}
