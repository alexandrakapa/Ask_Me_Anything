import { Controller, Get } from "@nestjs/common";
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
}
