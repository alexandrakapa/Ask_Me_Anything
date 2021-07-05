import { HttpModule, Module } from "@nestjs/common";
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { RedisModule } from 'nestjs-redis';
const options = { host: 'localhost',
  port: 6379,
  ttl: null};
@Module({
  imports: [HttpModule,RedisModule.register(options)],
  controllers: [QuestionController],
  providers: [QuestionService]
})
export class QuestionModule {}
