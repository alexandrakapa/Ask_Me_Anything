import { Body, Controller, Post } from "@nestjs/common";
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create') //to create an answer
  async addAnswer(@Body() body: any) {
    console.log(body)
    return this.answerService.createAnswer(body)
  }
}
