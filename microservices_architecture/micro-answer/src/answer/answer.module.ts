import { HttpModule, Module } from "@nestjs/common";
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from '../answer/entities/answer.entity';
import { AuthModule } from '../auth/auth.module';
import { RedisModule } from 'nestjs-redis';
let register = require("url").parse("redis://redistogo:a2bae6b7a720326c2f78d502a206c6ec@soapfish.redistogo.com:11514/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}
@Module({
  imports: [TypeOrmModule.forFeature([Answer]), AuthModule, RedisModule.register(options),HttpModule],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
