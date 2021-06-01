import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: '127.0.0.1',
  database: 'micro_question_db',
  username: "qna_admin",
  password: "1999",
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
}