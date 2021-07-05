import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { RedisModule } from 'nestjs-redis';
const options = { host: 'localhost',
  port: 6379,
  ttl: null};
@Module({
  imports: [QuestionModule,RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
