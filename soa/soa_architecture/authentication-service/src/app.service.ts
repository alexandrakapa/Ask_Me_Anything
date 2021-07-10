import { Injectable, HttpService, OnModuleInit } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { map } from "rxjs/operators";
import { RedisService } from "nestjs-redis";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AppService implements  OnModuleInit{
  constructor(
    private jwtService: JwtService,
    private httpService: HttpService,
    private readonly redisService: RedisService
  ) {}
  async onModuleInit(){
    console.log(`The module has been initialized.`);
    console.log("nikos");
    const client = await this.redisService.getClient();
    const my_addr = "https://soa-authentication-service.herokuapp.com";

    const reg_get_addr = await client.hget("auth", "register");

    if(!reg_get_addr || reg_get_addr[0] != my_addr+"/create"){
      console.log("problem1");
      let obj = [my_addr+"/create","post","no_auth"]
      const res1 = await client.hset("auth", "register",JSON.stringify(obj) );

    }

    const log_get_addr = await client.hget("auth", "login");

    if(!log_get_addr || log_get_addr[0] != my_addr+"/auth/login"){
      console.log("problem2");
      let obj = [my_addr+"/auth/login","post","no_auth"]
      const res2 = await client.hset("auth", "login",JSON.stringify(obj));

    }

    const auth_get_addr = await client.hget("auth", "check_tok");
    if(!auth_get_addr || auth_get_addr[0] != my_addr+"/auth/check"){
      console.log("problem3");
      let obj = [my_addr+"/auth/check","post","auth"]
      const res3 = await client.hset("auth", "check_tok", JSON.stringify(obj));

    }
    return "ok";

  }

  async register(req_body){
    console.log("hrere too");
    console.log(req_body);
    return this.httpService.post(' https://soa-data-layer-service.herokuapp.com/user/register',req_body).pipe(map(result => result.data));

  }
  async verif(tok){
    console.log(tok);
    await jwt.verify(tok, 'secret', function(err, decoded){
    let failed=0;
      if(err){
        console.log(err);
        failed=1;
      }
      if(failed){
        console.log("not hree");
        return 0;
      }else{
        console.log("here");
        return 1;
      }

    });

  }
}
