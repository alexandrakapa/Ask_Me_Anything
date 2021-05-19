import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../question/question.entity';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  // findAll(): Promise<Employee[]> {
  //   return this.employeeRepo.find({ relations: ["company"] });
  // }

  create(newUser){
    this.userRepo.insert(newUser)
  }
}
