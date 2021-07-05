import { Injectable } from '@nestjs/common';
import { RedisCacheService } from './redis-cache/redis-cache.service';

@Injectable()
export class AppService {
  constructor(private cacheManager: RedisCacheService) {}
  async onModuleInit() {

    console.log(`The module has been initialized.`);
    const saved_subs = await this.cacheManager.get('subscribers');

    console.log(saved_subs[0]);
    const subs= saved_subs[0].subscribers;
    let found = false;
    const my_addr = 'http://localhost:3000/bus';
    for (let i = 0; i < subs[1].length; i++) {
      if(subs[1][i] == my_addr){
        found=true;
      }
    }
    if(!found){
      subs[1].push(my_addr);
      const new_obj = [
        {
          subscribers: subs,
        },
      ];
      await this.cacheManager.set('subscribers', new_obj);
    }
  }
}
