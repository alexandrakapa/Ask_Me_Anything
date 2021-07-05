import { Injectable, HttpService, OnModuleInit, HttpException } from "@nestjs/common";
import { RedisService } from "nestjs-redis";
import { catchError, map } from "rxjs/operators";


@Injectable()
export class AppService {
  constructor(

    private readonly redisService: RedisService,
    private httpService: HttpService
  ) {}
  async onModuleInit(){
    console.log(`The module has been initialized.`);
    console.log("nikos");
    const client = await this.redisService.getClient();
    const my_addr = "http://localhost:3002/sb";

    const reg_get_addr = await client.hget("sb", "addr")
    if(reg_get_addr != my_addr){
      console.log("problem1");
      const res1 = await client.hset("sb", "addr",my_addr );

    }

    return "ok";

  }
  async serveReq(name,subname,head,body){
    const client = await this.redisService.getClient();
    let auth_get_addr = await client.hget(name, subname);

    if(auth_get_addr){
      auth_get_addr = JSON.parse(auth_get_addr);
      console.log(auth_get_addr);
      if(auth_get_addr[1] =="post"){
        if(auth_get_addr[2] == "auth"){
          const config = {
            headers: { Authorization: head.authorization }
          };
          console.log(config);
          console.log(body);
          console.log(auth_get_addr[0]);
          return this.httpService
            .post(auth_get_addr[0], body,config)
            .pipe(
              catchError(e => {
                throw new HttpException("error1",400);
              }),
              map(response => response.data),
            );
        }else{
          console.log("here");
          console.log(body);
          return this.httpService
            .post(auth_get_addr[0], body)
            .pipe(
              catchError(e => {
                throw new HttpException("error2",400);
              }),
              map(response => response.data),
            );
        }
      }else{
        if(auth_get_addr[2] == "auth"){
          const config = {
            headers: { Authorization: head.authorization }
          };
          console.log(auth_get_addr[0]);
          console.log(config);
          return this.httpService
            .get(auth_get_addr[0],config)
            .pipe(
              catchError(e => {
                throw new HttpException("error3",400);
              }),
              map(response => response.data),
            );
        }else{
          return this.httpService
            .get(auth_get_addr[0])
            .pipe(
              catchError(e => {
                throw new HttpException("error4",400);
              }),
              map(response => response.data),
            );
        }
      }
    }else{
      throw new HttpException("requested service does not exist or does not operate at the moment", 404);

    }
  }
  // async getAuth(tok) {
  //   const config = {
  //     headers: { Authorization: tok }
  //   };
  //   const client = await this.redisService.getClient();
  //   const auth_get_addr = await client.hget("auth_services", "auth");
  //   console.log(auth_get_addr);
  //   if(auth_get_addr !="nil"){
  //    return this.httpService
  //       .post(auth_get_addr, {
  //       },config)
  //      .pipe(
  //        catchError(e => {
  //          throw new HttpException(e.response.data, e.response.status);
  //        }),
  //        map(response => response.data),
  //      );
  //   }else{
  //     return "failed - auth service seems not to be responding!";
  //   }
  //   // return 'Hello World!';
  // }
  //
  // async getLogin(details) {
  //
  //   const client = await this.redisService.getClient();
  //   const auth_get_addr = await client.hget("auth_services", "login");
  //   console.log(auth_get_addr);
  //   if(auth_get_addr !="nil"){
  //     return this.httpService
  //       .post(auth_get_addr, details)
  //       .pipe(
  //         catchError(e => {
  //           throw new HttpException(e.response.data, e.response.status);
  //         }),
  //         map(response => response.data),
  //       );
  //   }else{
  //     return "failed - auth service seems not to be responding!";
  //   }
  //   // return 'Hello World!';
  // }
  //
  // async getRegister(details) {
  //
  //   const client = await this.redisService.getClient();
  //   const auth_get_addr = await client.hget("auth_services", "register");
  //   console.log(auth_get_addr);
  //   if(auth_get_addr !="nil"){
  //     return this.httpService
  //       .post(auth_get_addr, details)
  //       .pipe(
  //         catchError(e => {
  //           throw new HttpException(e.response.data, e.response.status);
  //         }),
  //         map(response => response.data),
  //       );
  //   }else{
  //     return "failed - auth service seems not to be responding!";
  //   }
  //   // return 'Hello World!';
  // }
}
