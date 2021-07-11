import { Injectable } from '@nestjs/common';
import { RedisService } from "nestjs-redis";

@Injectable()
export class AppService {
  constructor(private readonly redisService: RedisService) {}
  async onModuleInit() {
    const client = await this.redisService.getClient();

    console.log(`The module has been initialized.`);
    const saved_subs = await client.hget('subscribers','display');

    const my_addr = 'https://micro-display.herokuapp.com/bus';
    if(saved_subs !== my_addr){
      await client.hset('subscribers','display',my_addr)
    }
    }

}
