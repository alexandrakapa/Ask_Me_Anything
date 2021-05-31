import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AnswerService {
  constructor(private httpService: HttpService) {}

  createAnswer(body): Observable<any> {   //creates an answer
    return this.httpService.post(`http://localhost:3000/answer/create`, body)
      .pipe(map(result => result.data));
  }
}
