import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { sha512 } from 'sha512-crypt-ts';
import { UserEntity } from '../user/entities/user.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import {EntityManager} from 'typeorm';
@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private jwtService: JwtService,
    @InjectEntityManager() private manager: EntityManager
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.UserService.findOne(userName);

    const origHash = user.password,
      parts = origHash.split('$'),
      rounds = parts[2],
      salt = '$' + parts[1] + '$' + rounds + '$' + parts[3];

    const hash = sha512.crypt(pass, salt);
    if (user && hash === origHash) {
      console.log("abyss: "+user.id);
      return user.id;
    }else{
      return -1;
    }
  }

  async login(given_id) {
    console.log(given_id)
    const payload = { };
    return {
      accessToken: this.jwtService.sign(payload),
      id:given_id
    };
  }
  async register(req_body){
    const user = await this.manager.create(UserEntity, req_body);
    return this.manager.save(user);

  }
}
