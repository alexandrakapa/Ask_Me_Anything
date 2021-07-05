import { HttpModule, Module } from "@nestjs/common";
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from '../answer/entities/answer.entity';
import { AuthModule } from '../auth/auth.module';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';

@Module({
  imports: [TypeOrmModule.forFeature([Answer]), AuthModule, RedisCacheModule,HttpModule],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
