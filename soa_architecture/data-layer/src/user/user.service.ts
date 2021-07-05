import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { sha512 } from 'sha512-crypt-ts';

@Injectable()
export class UserService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}
  async create(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    console.log(CreateUserDto);
    const user = await this.manager.create(UserEntity, CreateUserDto);
    console.log(user.username);
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
  async validate(userName: string,passWord: string){
    const user = await this.findOne(userName);

    const origHash = user.password,
      parts = origHash.split('$'),
      rounds = parts[2],
      salt = '$' + parts[1] + '$' + rounds + '$' + parts[3];

    const hash = sha512.crypt(passWord, salt);
    if (user && hash === origHash) {
      return 1;
    }else{
      return 0;
    }
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
