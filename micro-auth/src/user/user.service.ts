import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { UserEntity } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}
  async create(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.manager.create(UserEntity, CreateUserDto);
    return this.manager.save(user);
  }

  // async findAll(): Promise<UserEntity[]> {
  //   return this.manager.find(UserEntity);
  // }

  async findOne(userName: string): Promise<UserEntity | undefined> {
    console.log('here: ' + userName);
    console.log(this.manager.findOne(UserEntity, userName));
    return this.manager.findOne(UserEntity, { username: userName });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
