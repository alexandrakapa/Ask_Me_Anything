import { HttpException, HttpService, Injectable } from '@nestjs/common';
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { RedisService } from "nestjs-redis";
import {AxiosResponse} from "axios";

@Injectable()
export class AnswerService {
  constructor(
    private readonly redisService: RedisService,

    private httpService: HttpService
  ){}
  async checkTok(token) {
    const client = await this.redisService.getClient();
    const get_addr = await client.hget("sb", "addr");
    const auth_get_addr = get_addr + "/auth/check_tok";
    const config = {
      headers: {Authorization: token}
    };
    console.log("config: "+auth_get_addr);
    console.log(config);
    if(auth_get_addr !="nil") {
      let res = await this.httpService.get(auth_get_addr, config)
        .pipe(
          catchError(e => {
            throw new HttpException("error", 400);
          })
        ).toPromise();
      console.log("here: "+ res.data);
      return res.data;
    }else{
      return 0;
    }
  }
  createAnswer(body): Observable<any> {   //creates an answer
    console.log(body);
    return this.httpService.post('https://soa-data-layer-service.herokuapp.com/answer/create', body)
      .pipe(map(result => result.data));
  }

  findAnswersByQuestionId(isAnAnswerOf: any): Observable<AxiosResponse<any>> {    //returns all answers by question id
    return this.httpService.get(`https://soa-data-layer-service.herokuapp.com/answer/all/` + isAnAnswerOf)
      .pipe(map(result => result.data));
  }

}
