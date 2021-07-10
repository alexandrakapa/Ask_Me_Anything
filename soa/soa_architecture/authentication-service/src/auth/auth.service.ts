import { Injectable, HttpService, OnModuleInit } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { sha512 } from 'sha512-crypt-ts';
import { map } from "rxjs/operators";
import * as util from "util";
import {json} from "express";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private httpService: HttpService,
  ) {}


  async validateUser(username: string, pass: string): Promise<any> {

    let res = await this.httpService.post(' https://soa-data-layer-service.herokuapp.com/user/validate',{ username:username,password:pass }).toPromise();
    return res.data;
  }

  async login(given_id) {
    console.log(given_id)
    const payload = { };
    return {
      accessToken: this.jwtService.sign(payload),
      id:given_id
    };
  }
}
