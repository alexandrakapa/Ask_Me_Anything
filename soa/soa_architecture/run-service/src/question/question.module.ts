import { HttpModule, Module } from "@nestjs/common";
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { RedisModule } from 'nestjs-redis';
let register = require("url").parse("redis://redistogo:835bc9eed609d3f4e44fc556d4c16412@soapfish.redistogo.com:11413/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}
@Module({
  imports: [HttpModule,RedisModule.register(options)],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
