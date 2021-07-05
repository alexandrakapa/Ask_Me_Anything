import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Answer} from "../../../data-layer/src/answer/answer.entity";
import {AxiosResponse} from "axios";

@Injectable()
export class AnswerService {
  constructor(private httpService: HttpService) {}

  createAnswer(body): Observable<any> {   //creates an answer
    return this.httpService.post(`http://localhost:3000/answer/create`, body)
      .pipe(map(result => result.data));
  }

  findAnswersByQuestionId(isAnAnswerOf: any): Observable<AxiosResponse<any>> {    //returns all answers by question id
    return this.httpService.get(`http://localhost:3000/answer/all/` + isAnAnswerOf)
      .pipe(map(result => result.data));
  }

}
