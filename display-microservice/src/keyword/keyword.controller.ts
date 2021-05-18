import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { KeywordService } from './keyword.service';
import { Keyword } from './keyword.entity';

@Controller('keyword')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService){}

  @Get()
  async getAll():Promise<Keyword[]>{
    return await this.keywordService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createKeyword(@Body() newKeyword:any){
    this.keywordService.create(newKeyword);
  }
}
