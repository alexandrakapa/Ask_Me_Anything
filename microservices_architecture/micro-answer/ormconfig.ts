import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: 5432,
  host: 'ec2-54-155-35-88.eu-west-1.compute.amazonaws.com',
  database: 'd5s8k706oem0dm',
  username: "ocsgvrpdilhjjj",
  password: "14c326d61155c7d76fcd92d27654dc207844b63dfb161032706ac07225b93a77",
  synchronize: true,
  ssl:{"rejectUnauthorized":false},
  entities: ['dist/**/*.entity{.ts,.js}'],
}