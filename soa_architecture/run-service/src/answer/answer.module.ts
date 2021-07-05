import { HttpModule, Module } from "@nestjs/common";
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { RedisModule } from 'nestjs-redis';
const options = { host: 'localhost',
  port: 6379,
  ttl: null};
@Module({
  imports: [HttpModule,RedisModule.register(options)],
  controllers: [AnswerController],
  providers: [AnswerService]
})
export class AnswerModule {}
