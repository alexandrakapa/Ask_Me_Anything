import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import {EntityManager, getConnection} from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { sha512 } from 'sha512-crypt-ts';

@Injectable()
export class UserService {
  constructor(@InjectEntityManager() private manager: EntityManager) {}
  async create( CreateUserDto) {
    console.log(CreateUserDto);
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
  async validate(userName: string,passWord: string){
    console.log("herer");
    const user = await this.findOne(userName);

    const origHash = user.password,
      parts = origHash.split('$'),
      rounds = parts[2],
      salt = '$' + parts[1] + '$' + rounds + '$' + parts[3];

    const hash = sha512.crypt(passWord, salt);
    if (user && hash === origHash) {
      console.log("abyss: "+user.id);
      return user.id;
    }else{
      return -1;
    }
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
