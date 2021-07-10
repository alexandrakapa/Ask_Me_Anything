import { HttpModule, Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
 import { RedisModule } from 'nestjs-redis';
// const options = { host: 'localhost',
//   port: 6379,
//   ttl: null};
@Module({
  imports: [RedisModule.register({ url: process.env.REDISTOGO_URL }) ,HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
