import {Controller, Get, Post, UseGuards, Request, Body, Res, Req} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private authService: AuthService,private  appService: AppService) {}

  @Post('register')
  async reg(@Req() request: Request) {
    console.log("here comes the reg controler");

    console.log("hrerere");
    console.log(request.body);

    return await this.appService.register(request.body)
  }

  // @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() request: Request) {
    console.log("here comes the login controler");
    console.log(request.body['username']);
    let validator = await this.authService.validateUser(request.body['username'],request.body['password']);
    console.log("here: "+validator);
    if(validator != -1){
      return await this.authService.login(validator);
    }else{
      return "wrong credentials!";
    }
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('auth/check')
  getTodos() {
    return 1;
  }

}
