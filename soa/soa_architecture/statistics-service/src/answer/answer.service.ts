import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {AxiosResponse} from "axios";

@Injectable()
export class AnswerService {
  constructor(private httpService: HttpService) {}

  findByDayUser(user:number): Observable<AxiosResponse<any>> {
      return this.httpService.get('https://soa-data-layer-service.herokuapp.com/answer/statistics/byDay/'+user)
          .pipe(
              map(response => response.data),
          );
  }

}
