import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity{

  @PrimaryGeneratedColumn()
  id? : number;

  @CreateDateColumn({nullable :true})
  createdAt?: Date;

  @CreateDateColumn({nullable :true})
  updatedAt?: Date;
}