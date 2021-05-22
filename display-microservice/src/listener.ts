import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://txwtibhz:jePX6OKOSawmwd55GFPwAd28RPETSuIc@baboon.rmq.cloudamqp.com/txwtibhz'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen( () => {
    console.log('Microservice is listening')
  })
}
bootstrap();
