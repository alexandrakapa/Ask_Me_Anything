import { Controller, Get, Post, UseGuards, Request, Req } from "@nestjs/common";
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private authService: AuthService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Post('register')
  async reg(@Req() request: Request) {
    console.log("here comes the reg controler");

    console.log("hrerere");
    console.log(request.body);

    return await this.authService.register(request.body)
  }
  @Post('auth/login')
  async login(@Req() request: Request) {
    let validator = await this.authService.validateUser(request.body['username'],request.body['password']);
    if(validator != -1){
      return await this.authService.login(validator);
    }else{
      let obj={'accessToken':''}
      return JSON.stringify(obj);
    }
  }
  // @UseGuards(AuthGuard('jwt'))
  // @Get('todos')
  // getTodos() {
  //   return ['Watch Movie', 'Take Health Test', 'Play Cricket'];
  // }
}
