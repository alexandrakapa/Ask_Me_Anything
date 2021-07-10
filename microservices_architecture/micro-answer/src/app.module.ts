import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerModule } from 'src/answer/answer.module';
import { RedisModule } from 'nestjs-redis';
import {config} from '../ormconfig'

let register = require("url").parse("redis://redistogo:a2bae6b7a720326c2f78d502a206c6ec@soapfish.redistogo.com:11514/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}


@Module({
  imports: [TypeOrmModule.forRoot(config), AnswerModule,RedisModule.register(options)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
