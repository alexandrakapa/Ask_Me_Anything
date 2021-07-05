import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { QuestionService } from './question/question.service';
import { AnswerService } from './answer/answer.service';

//your-domain.com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly questionService: QuestionService,private readonly answerService: AnswerService) {}

  @Post('bus/question')
  async getEvent(@Req() req, @Res() res) {
    console.log(req.body.id);
    await this.questionService.make_question_keyword( req.body.id,req.body.title,req.body.text,req.body.askedFrom,req.body.askedOn,req.body.keywords);
    res.send('ok');
  }

  @Post('bus/answer')
  async getnewEvent(@Req() req, @Res() res) {
    console.log(req.body.id);
    await this.answerService.make_answer( req.body.id,req.body.text,req.body.answeredFrom,req.body.answeredOn,req.body.isAnAnswerOf);
    res.send('ok');
  }


}
