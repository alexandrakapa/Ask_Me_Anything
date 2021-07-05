import { Injectable, HttpService, OnModuleInit } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { sha512 } from 'sha512-crypt-ts';
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private httpService: HttpService,
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {

    return this.httpService.post(' http://localhost:3000/data-layer/user/validate',{ username:username,password:pass }).pipe(map(result => result.data));

  }

  async login(user: any) {
    const payload = { username: user.userName };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
