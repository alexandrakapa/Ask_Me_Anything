import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Get('/statistics/byDay/:user')  //for statistics by day
  async getByDayUser(@Param('user', ParseIntPipe) user: number): Promise<any>{
    return this.answerService.findByDayUser(user);
  }
}
