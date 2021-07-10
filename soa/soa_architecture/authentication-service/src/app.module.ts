import { Module,HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RedisModule } from 'nestjs-redis';
let register = require("url").parse("redis://redistogo:835bc9eed609d3f4e44fc556d4c16412@soapfish.redistogo.com:11413/")
const options = {
  port:register.port,
  host:register.hostname,
  password:register.auth.split(":")[1],
}
@Module({
  imports: [
    AuthModule,
    HttpModule,
    ConfigModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '7d',
      },
    }),
    RedisModule.register(options),


    JwtStrategy,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
