import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: '127.0.0.1',
  database: 'statistics_microservice',
  username: "postgres",
  password: "fresdr7l389",
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
}