import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { Company } from '../companies/company.entity';

@Entity()
export class Employee {

  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  name: string;

  @Column()
  salary: number;

  @Column()
  age: number;

  @ManyToOne(() => Company, (company) => company.employees)
  public company: Company;

}