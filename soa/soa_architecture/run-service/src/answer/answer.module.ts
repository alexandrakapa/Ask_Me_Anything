import { HttpModule, Module } from "@nestjs/common";
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { RedisModule } from 'nestjs-redis';
let register = require("url").parse("redis://redistogo:835bc9eed609d3f4e44fc556d4c16412@soapfish.redistogo.com:11413/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}
@Module({
  imports: [HttpModule,RedisModule.register(options)],
  controllers: [AnswerController],
  providers: [AnswerService]
})
export class AnswerModule {}
