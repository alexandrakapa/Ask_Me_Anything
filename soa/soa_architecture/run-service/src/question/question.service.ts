import {HttpService, Injectable, NotFoundException,HttpException} from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios'
import { catchError, map } from "rxjs/operators";
import { RedisService } from "nestjs-redis";

@Injectable()
export class QuestionService {
  constructor(private httpService: HttpService,private readonly redisService: RedisService) {}
  findSome(): Observable<AxiosResponse<any>> {   //returns all the questions with their answers
    return this.httpService.get('https://soa-data-layer-service.herokuapp.com/question/some_answers')
        .pipe(
            map(response => response.data),
        );
  }

  findAll(): Observable<AxiosResponse<any>> {   //returns all the questions with their answers
    return this.httpService.get('https://soa-data-layer-service.herokuapp.com/question/andanswers')
      .pipe(
        map(response => response.data),
      );
  }

  findAllQuestionsByUserId(askedFrom : number): Observable<AxiosResponse<any>> {   //returns all the questions with their answers
    return this.httpService.get(`https://soa-data-layer-service.herokuapp.com/question/user/all/`+ askedFrom)
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
  createQuestion(body): Observable<any> {   //creates a question
    return this.httpService.post(`https://soa-data-layer-service.herokuapp.com/question/create`, body)
      .pipe(map(result => result.data));
  }

  findQuestionById(questionId: number): Observable<AxiosResponse<any>> {  //return one question by question id
    return this.httpService.get(`https://soa-data-layer-service.herokuapp.com/question/byId/${questionId}`)
        .pipe(
            map(response => response.data),
        );
  }

}
