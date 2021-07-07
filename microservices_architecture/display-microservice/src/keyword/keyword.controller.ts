import { Body, Controller, Get, HttpCode, Post, UseGuards } from "@nestjs/common";
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { KeywordService } from './keyword.service';
import { Keyword } from './keyword.entity';
import { EventPattern } from '@nestjs/microservices';
import { AuthGuard } from "@nestjs/passport";

@Controller('keyword')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService){}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll():Promise<Keyword[]>{
    return await this.keywordService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @EventPattern('keyword_created')
  async hello(keyword: any){
    await this.keywordService.create(keyword);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  @HttpCode(201)
  createKeyword(@Body() newKeyword:any){
    this.keywordService.create(newKeyword);
  }

  // @EventPattern('hello')
  // async hello(data: string){
  //   console.log(data)
  // }


}
