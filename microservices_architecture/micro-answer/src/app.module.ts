import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerModule } from 'src/answer/answer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
