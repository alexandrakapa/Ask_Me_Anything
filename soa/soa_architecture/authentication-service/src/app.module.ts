import { Module,HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from 'nestjs-redis';
import { ConfigModule, ConfigService } from "@nestjs/config";
const options = { host: 'localhost',
  port: 6379,
  ttl: null};
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
    // RedisModule.register(
    //   {
    //     host: 'localhost',
    // "port": 6379,
    // ttl: null }
    // )

    JwtStrategy,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
