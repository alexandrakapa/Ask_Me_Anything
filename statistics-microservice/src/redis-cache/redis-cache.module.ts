import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.registerAsync({

      useFactory: async () => ({
        store: redisStore,
        host: 'localhost',
        port: 6379,
        ttl: null,
      }),
    })
  ],
  providers: [RedisCacheService],
  exports: [RedisCacheService]
})
export class RedisCacheModule {}