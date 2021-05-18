import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Company } from '../companies/company.entity';


@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepo: Repository<Employee>) {}

  // findAll(): Promise<Employee[]> {
  //   return this.employeeRepo.find();
  // }

  findAll(): Promise<Employee[]> {
      return this.employeeRepo.find({ relations: ["company"] });
    }

  create(newEmployee){
    this.employeeRepo.insert(newEmployee)
  }

}