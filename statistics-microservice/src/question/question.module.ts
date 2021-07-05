import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionController } from './question.controller';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), RedisCacheModule],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
