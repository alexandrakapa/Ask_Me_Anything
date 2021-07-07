import { Body, Controller, Get, HttpCode, Param, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService){}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll():Promise<Question[]>{
    return await this.questionService.findAll();
  }


  @Post('bus')
  async getEvent(@Req() req, @Res() res) {
    console.log(req.body.id);
    await this.questionService.make_question_keyword(req.body.id,req.body.askedFrom,req.body.askedOn,req.body.keywords);
    res.send('ok');
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  @HttpCode(201)
  createQuestion(@Body() newQuestion:any){
    this.questionService.create(newQuestion);
  }

  @Get('byDay')
  async getByDay():Promise<Question[]>{
    return await this.questionService.findByDay();
  }

  @Get('byKeyword')
  async getByKeyword():Promise<Question[]>{
    return await this.questionService.findByKeyword();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('byDay/:user')
  async getByDayUser(@Param('user') user):Promise<Question[]>{
    return await this.questionService.findByDayUser(user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('byKeyword/:user')
  async getByKeywordUser(@Param('user') user):Promise<Question[]>{
    return await this.questionService.findByKeywordUser(user)
  }

}
