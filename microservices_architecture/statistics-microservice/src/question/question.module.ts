import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionController } from './question.controller';
import { RedisModule } from 'nestjs-redis';
import { JwtStrategy } from '../auth/jwt.strategy';
let register = require("url").parse("redis://redistogo:a2bae6b7a720326c2f78d502a206c6ec@soapfish.redistogo.com:11514/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}
@Module({
  imports: [TypeOrmModule.forFeature([Question]), RedisModule.register(options),JwtStrategy],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
