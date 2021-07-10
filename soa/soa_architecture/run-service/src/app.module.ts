import { Module,HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';
import { RedisModule } from 'nestjs-redis';
let register = require("url").parse("redis://redistogo:835bc9eed609d3f4e44fc556d4c16412@soapfish.redistogo.com:11413/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}
@Module({
  imports: [QuestionModule, AnswerModule,HttpModule,RedisModule.register(options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
