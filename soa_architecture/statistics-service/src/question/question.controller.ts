import {Controller, Get, Param, ParseIntPipe} from "@nestjs/common";
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('statistics/byDay')  //for statistics by day
  async getByDay():Promise<any>{
    return this.questionService.findByDay();
  }

  @Get('statistics/byKeyword')  //for statistics by keyword
  async getByKeyword():Promise<any>{
    return this.questionService.findByKeyword();
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
