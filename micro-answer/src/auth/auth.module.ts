import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [

    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],
  providers: [JwtStrategy],
})
export class AuthModule {}
