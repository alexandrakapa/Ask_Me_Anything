import { HttpException, HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios'
import { catchError, map } from "rxjs/operators";
import { RedisService } from "nestjs-redis";

@Injectable()
export class QuestionService {
  constructor(private httpService: HttpService,private redisService:RedisService) {}

  findByDay(): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:3000/question/statistics/byDay')
      .pipe(
        map(response => response.data),
      );
  }

  findByKeyword(): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:3000/question/statistics/byKeyword')
      .pipe(
        map(response => response.data),
      );
  }
  async checkTok(token) {
    const client = await this.redisService.getClient();
    const get_addr = await client.hget("sb", "addr");
    const auth_get_addr = get_addr + "/auth/check_tok";
    const config = {
      headers: {Authorization: token}
    };
    console.log("config: " + auth_get_addr);
    console.log(config);
    if (auth_get_addr != "nil") {
      let res = await this.httpService.get(auth_get_addr, config)
          .pipe(
              catchError(e => {
                throw new HttpException("error", 400);
              })
          ).toPromise();
      console.log("here: " + res.data);
      return res.data;
    } else {
      return 0;
    }
  }

  findByDayUser(user:number): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:3000/question/statistics/byDay/'+user)
        .pipe(
            map(response => response.data),
        );
  }

  findByKeywordUser(user:number): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:3000/question/statistics/byKeyword/'+user)
        .pipe(
            map(response => response.data),
        );
  }
}
