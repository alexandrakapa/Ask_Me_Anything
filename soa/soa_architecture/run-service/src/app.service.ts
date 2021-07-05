import { Injectable,HttpService,OnModuleInit } from '@nestjs/common';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { RedisService } from "nestjs-redis";

@Injectable()
export class AppService implements OnModuleInit{
  constructor(
    private readonly redisService: RedisService
  ) {}
  async onModuleInit(){
    console.log(`The module has been initialized.`);
    console.log("nikos");
    const client = await this.redisService.getClient();
    const my_addr = "http://localhost:3001";

    const create_answer = await client.hget("run_services", "create_answer")
    if(create_answer != my_addr+"/answer/create"){
      let obj = [my_addr+"/answer/create","post","auth"];
      const res1 = await client.hset("run_services", "create_answer",JSON.stringify(obj) );
    }

    const find_all_questions = await client.hget("run_services", "find_all_questions")
    if(!find_all_questions || find_all_questions[0] != my_addr+"/question/andanswers"){
      let obj = [my_addr+"/question/andanswers","get","auth"];
      const res2 = await client.hset("run_services", "find_all_questions",JSON.stringify(obj) );
    }
    //provlima
    const get_questions_by_id = await client.hget("run_services", "get_all_questions_by_id")
    if(!get_questions_by_id || get_questions_by_id[0] != my_addr+"/question/user/all/:askedFrom"){
      let obj = [my_addr+"/question/user/all/:askedFrom","get","auth"];
      const res3 = await client.hset("run_services", "get_all_questions_by_id", JSON.stringify(obj));
    }

    const create_question = await client.hget("run_services", "create_question")
    if(!create_question ||create_question[0] != my_addr+"/question/create"){
      let obj = [my_addr+"/question/create","post","auth"];
      const res4 = await client.hset("run_services", "create_question",JSON.stringify(obj) );
    }
    return "ok";
  }

  getHello(): string {
    return 'Hello World!';
  }

}
