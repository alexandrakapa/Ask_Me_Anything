import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {Answer} from "../../../data-layer/src/answer/answer.entity";
import {AxiosResponse} from "axios";

@Injectable()
export class AnswerService {
  constructor(private httpService: HttpService) {}

  findByDayUser(user:number): Observable<AxiosResponse<any>> {
      return this.httpService.get('http://localhost:3000/answer/statistics/byDay/'+user)
          .pipe(
              map(response => response.data),
          );
  }

}
