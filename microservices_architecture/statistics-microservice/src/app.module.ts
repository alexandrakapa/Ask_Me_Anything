import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './orm.config'
import { QuestionModule } from './question/question.module';
import { KeywordModule } from './keyword/keyword.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), QuestionModule, KeywordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
