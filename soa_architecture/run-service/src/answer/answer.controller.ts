import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create') //to create an answer
  async addAnswer(@Body() body: any) {
    console.log(body)
    return this.answerService.createAnswer(body)
  }

  @Get('all/:isAnAnswerOf')
  async findAllByQuestionId(@Param('isAnAnswerOf', ParseIntPipe) isAnAnswerOf: number): Promise<any> {
    return this.answerService.findAnswersByQuestionId(isAnAnswerOf);
  }
}
