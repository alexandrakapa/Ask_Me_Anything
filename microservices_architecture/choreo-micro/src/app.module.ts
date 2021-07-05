import { HttpModule, Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisCacheModule } from './redis-cache/redis-cache.module';

@Module({
  imports: [RedisCacheModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
