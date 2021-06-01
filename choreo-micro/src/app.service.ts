import { Injectable } from '@nestjs/common';
import { RedisCacheService } from './redis-cache/redis-cache.service';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  constructor(private cacheManager: RedisCacheService) {}
  async setSomeValue(KEY, value) {
    await this.cacheManager.set(KEY, value);
  }
  async getSomeValue(KEY) {
    const cur = await this.cacheManager.get(KEY);
    // console.log(cur);
    // await this.cacheManager.get(KEY);
    return cur;
  }
}
