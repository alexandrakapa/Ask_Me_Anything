import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionController } from './question.controller';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionService,JwtStrategy],
  controllers: [QuestionController],
  exports: [QuestionService]
})
export class QuestionModule {}
