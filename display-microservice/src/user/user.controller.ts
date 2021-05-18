import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { QuestionService } from '../question/question.service';
import { Question } from '../question/question.entity';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get()
  async getAll():Promise<User[]>{
    return await this.userService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createUser(@Body() newUser:any){
    this.userService.create(newUser);
  }
}
