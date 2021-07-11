import { HttpModule, Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from 'nestjs-redis';
let register = require("url").parse("redis://redistogo:a2bae6b7a720326c2f78d502a206c6ec@soapfish.redistogo.com:11514/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}
@Module({
  imports: [RedisModule.register(options), HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
