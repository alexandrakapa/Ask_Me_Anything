import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { KeywordModule } from './keyword/keyword.module';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { QuestionService } from "./question/question.service";
import { AnswerService } from "./answer/answer.service";

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    QuestionModule,
    AnswerModule,
    KeywordModule,
    RedisCacheModule
  ],
  controllers: [AppController],
  providers: [AppService, QuestionService, AnswerService]
})
export class AppModule {}
