import { Injectable, OnModuleInit} from '@nestjs/common';
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
    const my_addr = "https://soa-statistics-service.herokuapp.com/question/statistics";

    const stats_day_addr = await client.hget("stats_services", "day")
    if(!stats_day_addr || stats_day_addr[0] != my_addr+"/byDay"){
      let obj = [my_addr+"/byDay","get","auth"];
      const res1 = await client.hset("stats_services", "day",JSON.stringify(obj));

    }
    const stats_key_addr = await client.hget("stats_services", "keyword")
    if(!stats_key_addr || stats_key_addr[0] != my_addr+"/byKeyword"){
      let obj = [my_addr+"/byKeyword","get","auth"];
      const res2 = await client.hset("stats_services", "keyword",JSON.stringify(obj) );

    }


    return "ok";
  }

  getHello(): string {
    return 'Hello World!';
  }
}
