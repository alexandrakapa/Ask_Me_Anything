import { Controller, Get, Post, UseGuards, Request,Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private authService: AuthService,private  appService: AppService) {}

  @Post('register')
  async reg(@Body() reg_details) {
    return await this.appService.register(reg_details)
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Body() log_dets) {
    return await this.authService.login(log_dets.username);
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('auth/check')
  getTodos() {
    return 1;
  }

}
