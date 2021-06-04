import { Body, Controller, Post } from "@nestjs/common";
import { AnswerService } from './answer.service';
import { Answer } from "./answer.entity";
import { CreateAnswerDto } from "./dto/create-answer.dto";

@Controller('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create')
  addAnswer(@Body() createQuizDto: CreateAnswerDto): Promise<Answer> {
    return this.answerService.createAnswer(createQuizDto);
  }
}
