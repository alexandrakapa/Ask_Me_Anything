import { HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios'
import { map } from "rxjs/operators";

@Injectable()
export class QuestionService {
  constructor(private httpService: HttpService) {}

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
