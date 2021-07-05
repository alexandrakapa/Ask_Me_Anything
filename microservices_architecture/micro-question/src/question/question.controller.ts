import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { MessagePattern, Payload } from '@nestjs/microservices';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from '../question/entities/question.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // @MessagePattern('createQuestion')
  // create(@Payload() createQuestionDto: CreateQuestionDto) {
  //   return this.questionService.create(createQuestionDto);
  // }

  // @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async addProduct(@Body() body: Question) {
    try {
      console.log(body.title);
      console.log(body.text);
      // console.log(body.askedOn);
      console.log(body.askedFrom);
      console.log(body.keywords);

      const generatedId = this.questionService.createQuestion(
        body.title,
        body.text,
        // body.askedOn,
        body.askedFrom,
        body.keywords,
      );
      // return generatedId;
      return("A new question has been added")
    }
    catch (error) {
      console.log("error")
    }
  }

  // @MessagePattern('findAllQuestion')
  // @UseGuards(AuthGuard('jwt'))
  // @Get()
  // async getAll():Promise<Question[]>{
  //   return await this.questionService.findAll();
  // }
  //
  // @MessagePattern('findOneQuestion')
  // findOne(@Payload() id: number) {
  //   return this.questionService.findOne(id);
  // }
  //
  // @MessagePattern('updateQuestion')
  // update(@Payload() updateQuestionDto: UpdateQuestionDto) {
  //   return this.questionService.update(updateQuestionDto.id, updateQuestionDto);
  // }
  //
  // @MessagePattern('removeQuestion')
  // remove(@Payload() id: number) {
  //   return this.questionService.remove(id);
  // }
}
