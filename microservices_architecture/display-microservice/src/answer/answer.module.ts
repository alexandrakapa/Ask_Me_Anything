import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './answer.entity';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Answer])],
  providers: [AnswerService,JwtStrategy],
  controllers: [AnswerController],
  exports: [AnswerService]
})
export class AnswerModule {}
