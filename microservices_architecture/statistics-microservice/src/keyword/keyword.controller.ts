import { Body, Controller, Get, HttpCode, Inject, Post } from '@nestjs/common';
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { KeywordService } from './keyword.service';
import { Keyword } from './keyword.entity';

@Controller('keyword')
export class KeywordController {
  constructor(
    private readonly keywordService: KeywordService,
  ){}

  @Get()
  async getAll():Promise<Keyword[]>{
    // this.client.emit('hello','hello from rabbitmq')
    return await this.keywordService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  async createKeyword(@Body() newKeyword:any){
    const keyword = await this.keywordService.create(newKeyword)
    console.log(newKeyword)
    return newKeyword


    // this.keywordService.create(newKeyword);
  }
}
