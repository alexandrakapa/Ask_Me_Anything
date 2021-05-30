import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { KeywordModule } from './keyword/keyword.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './orm.config'

@Module({
  imports: [TypeOrmModule.forRoot(config),QuestionModule, AnswerModule, KeywordModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
