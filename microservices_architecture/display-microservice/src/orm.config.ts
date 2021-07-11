import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'ec2-99-80-200-225.eu-west-1.compute.amazonaws.com',
  database: 'd5l4sb55i5cffu',
  username: "dplnqkbnzmonay",
  password: "c7635326b55d456b533fc7a177865d35bd213ba6f6d33b300e74571bf67b269c",
  synchronize: true,
  ssl:{"rejectUnauthorized":false},
  entities: ['dist/**/*.entity{.ts,.js}'],
}