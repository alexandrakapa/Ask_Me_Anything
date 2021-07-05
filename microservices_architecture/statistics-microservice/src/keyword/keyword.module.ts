import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Keyword } from './keyword.entity';
import { KeywordService } from './keyword.service';
import { KeywordController } from './keyword.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Keyword]),
    ClientsModule.register([
      {
        name: 'KEYWORD_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://txwtibhz:jePX6OKOSawmwd55GFPwAd28RPETSuIc@baboon.rmq.cloudamqp.com/txwtibhz'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  providers: [KeywordService],
  controllers: [KeywordController],
})
export class KeywordModule {}
