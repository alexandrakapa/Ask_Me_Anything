import { Injectable } from '@nestjs/common';
import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get(key): Promise<any> {
    const cur = await this.cache.get(key);
    console.log(cur);
    // console.log(JSON.parse(cur));
    return await this.cache.get(key);
  }

  async set(key, value) {
    await this.cache.set(key, value,{ ttl: null });
  }

  async reset() {
    await this.cache.reset();
  }

  async del(key) {
    await this.cache.del(key);
  }
}
