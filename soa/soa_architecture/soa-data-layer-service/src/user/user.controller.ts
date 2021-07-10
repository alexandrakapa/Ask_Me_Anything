import { Body, Controller, Post,Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async create(@Body() createQuizDto: CreateUserDto) {
    console.log("hrere inside");
    let res = await this.userService.create(createQuizDto);
    return "ok";
  }
  @Post('test')
  async cre()  {
    console.log('im here!')
    return "return";
  }
  @Post('validate')
  async login(@Body() user_dets) {
    let fin_ans = await this.userService.validate(user_dets.username, user_dets.password);
    console.log("fin:"+fin_ans);
    return fin_ans;

  }
  // @MessagePattern('createUser')
  // create(@Payload() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }
  //
  // @MessagePattern('findAllUser')
  // findAll() {
  //   return this.userService.findAll();
  // }
  //
  // @MessagePattern('findOneUser')
  // findOne(@Payload() id: number) {
  //   return this.userService.findOne(id);
  // }
  //
  // @MessagePattern('updateUser')
  // update(@Payload() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(updateUserDto.id, updateUserDto);
  // }
  //
  // @MessagePattern('removeUser')
  // remove(@Payload() id: number) {
  //   return this.userService.remove(id);
  // }
}
