import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { sha512 } from 'sha512-crypt-ts';

@Injectable()
export class AuthService {
  constructor(
    private UserService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string): Promise<any> {
    const user = await this.UserService.findOne(userName);
    const origHash = user.password,
      parts = origHash.split('$'),
      rounds = parts[2],
      salt = '$' + parts[1] + '$' + rounds + '$' + parts[3];
    const hash = sha512.crypt(pass, salt);
    if (user && hash === origHash) {
      const payload = { username: user.username };

      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.userName };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
