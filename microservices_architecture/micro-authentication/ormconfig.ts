import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'ec2-54-73-68-39.eu-west-1.compute.amazonaws.com',
  database: 'deptmaa82ll17r',
  username: "bduvgzccnbkdkj",
  password: "5c0bc9d13e4d23dbc4a3b4c8ea552f3c63b2e731e351af7df57de257121ba2cd",
  synchronize: true,
  ssl:{"rejectUnauthorized":false},
  entities: ['dist/**/*.entity{.ts,.js}'],
}