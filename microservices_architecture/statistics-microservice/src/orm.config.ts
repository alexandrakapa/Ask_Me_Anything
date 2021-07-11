import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'ec2-54-73-68-39.eu-west-1.compute.amazonaws.com',
  database: 'd8dkfup9vlerb1',
  username: "daqvcgmipawuyx",
    password: "6620e6a75712a6f30ab7d08a9b298e5c9a0bb45817b9f98aea68f7a2feadc8f7",
  ssl:{"rejectUnauthorized":false},

  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
}