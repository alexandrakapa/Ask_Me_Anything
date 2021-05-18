import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { Employee } from '../employee/employee.entity';

@Entity('companies')
export class Company {

  @PrimaryGeneratedColumn()
  id : number;

  @CreateDateColumn({nullable :true})
  createdAt: Date;

  @CreateDateColumn({nullable :true})
  updatedAt: Date;

  @Column({type : 'varchar', length: 100, nullable: false})
  name: string;

  @Column({type : 'varchar', length: 100, nullable: true})
  domain: string;

  @Column({type : 'text', nullable: true, default: null})
  description: string;

  @OneToMany(() => Employee, (employee) => employee.company)
  public employees: Employee[];

}
