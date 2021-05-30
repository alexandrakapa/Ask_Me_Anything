import { HttpService, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios'
import { map } from "rxjs/operators";

@Injectable()
export class QuestionService {
  constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<any>> {   //returns all the questions with their answers
    return this.httpService.get('http://localhost:3000/question/andanswers')
      .pipe(
        map(response => response.data),
      );
  }

  findAllQuestionsByUserId(askedFrom : number): Observable<AxiosResponse<any>> {   //returns all the questions with their answers
    return this.httpService.get(`http://localhost:3000/question/user/all/`+ askedFrom)
      .pipe(
        map(response => response.data),
      );
  }

  createQuestion(body): Observable<any> {   //creates a question
    return this.httpService.post(`http://localhost:3000/question/create`, body)
      .pipe(map(result => result.data));
  }


  // findByDay(): Observable<AxiosResponse<any>> {
  //   return this.httpService.get('http://localhost:3000/question/statistics/byDay')
  //     .pipe(
  //       map(response => response.data),
  //     );
  // }


}
