import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from '../answer/entities/answer.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(@Body() createQuizDto: CreateAnswerDto): Promise<Answer> {
    return this.answerService.create(createQuizDto);
  }
  // @MessagePattern('createAnswer')
  // create(@Payload() createAnswerDto: CreateAnswerDto) {
  //   return this.answerService.create(createAnswerDto);
  // }
  //
  // @MessagePattern('findAllAnswer')
  // findAll() {
  //   return this.answerService.findAll();
  // }
  //
  // @MessagePattern('findOneAnswer')
  // findOne(@Payload() id: number) {
  //   return this.answerService.findOne(id);
  // }
  //
  // @MessagePattern('updateAnswer')
  // update(@Payload() updateAnswerDto: UpdateAnswerDto) {
  //   return this.answerService.update(updateAnswerDto.id, updateAnswerDto);
  // }
  //
  // @MessagePattern('removeAnswer')
  // remove(@Payload() id: number) {
  //   return this.answerService.remove(id);
  // }
}
