import { Injectable } from '@nestjs/common';
import { Company } from './company.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class CompaniesService {

  constructor(@InjectRepository(Company) private companiesRepo: Repository<Company>) {}

  // findAll(): Promise<Company[]> {
  //   return this.companiesRepo.find();
  // }

  create(newCompany){
    this.companiesRepo.insert(newCompany)
  }

  findAll(): Promise<Company[]> {
    return this.companiesRepo.find({ relations: ["employees"] });  //returns company with its employees
  }


}
