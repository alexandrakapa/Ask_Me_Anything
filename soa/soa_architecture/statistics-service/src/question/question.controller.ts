
import {Controller, Get, Param, ParseIntPipe,Headers} from "@nestjs/common";
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('statistics/byDay')  //for statistics by day
  async getByDay():Promise<any>{
    // let auth_res = await this.questionService.checkTok(head.authorization);
    // console.log("auth: "+auth_res);
    // if(auth_res ==1) {
    return this.questionService.findByDay();
    // }else{
    //   return "not authorized!";
    // }
  }

  @Get('statistics/byKeyword')  //for statistics by keyword
  async getByKeyword():Promise<any>{
    // let auth_res = await this.questionService.checkTok(head.authorization);
    // console.log("auth: "+auth_res);
    // if(auth_res ==1) {
    return this.questionService.findByKeyword();
    // }else{
    //   return "not authorized!";
    // }
  }

  @Get('statistics/byDay/:user')  //for statistics by day
  async getByDayUser(@Param('user', ParseIntPipe) user: number): Promise<any>{
    return this.questionService.findByDayUser(user);
  }

  @Get('statistics/byKeyword/:user')  //for statistics by keyword
  async getByKeywordUser(@Param('user', ParseIntPipe) user: number): Promise<any>{
    return this.questionService.findByKeywordUser(user);
  }

}
