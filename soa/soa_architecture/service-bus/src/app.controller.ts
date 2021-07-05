import { Body, Controller, Get, Headers, Post,Param } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('check/auth')
  // async getAuth(@Headers() headers) {
  //   // return headers.authorization;
  //   return await this.appService.getAuth(headers.authorization);
  // }
  // @Post('auth/login')
  // async getLogin(@Body() body_dets) {
  //   // return headers.authorization;
  //   return await this.appService.getLogin(body_dets);
  // }
  //
  // @Post('auth/register')
  // async getRegister(@Body() body_dets) {
  //   // return headers.authorization;
  //   return await this.appService.getRegister(body_dets);
  // }

  @Get('sb/:test/:subtest')
  async test(@Param() params,@Headers() head_dets,@Body() body_dets ){
    return await this.appService.serveReq(params.test,params.subtest,head_dets,body_dets);
  }
}
