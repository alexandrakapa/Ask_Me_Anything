import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'ec2-54-155-35-88.eu-west-1.compute.amazonaws.com',
  database: 'db10jp6rsc0oep',
  username: "qmkmbxybjlsila",
  password: "6dc77a5c14297db2e5e4a156f37c0100ce5d0bafbd3c3640db67ec351d53e934",
  synchronize: true,
  ssl:{"rejectUnauthorized":false},
  entities: ['dist/**/*.entity{.ts,.js}'],
}