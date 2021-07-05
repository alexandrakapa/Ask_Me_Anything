import { HttpModule, Module } from "@nestjs/common";
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { Question } from './entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [TypeOrmModule.forFeature([Question]), AuthModule, HttpModule],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
