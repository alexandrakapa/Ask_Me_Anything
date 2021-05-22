import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionController } from './question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
