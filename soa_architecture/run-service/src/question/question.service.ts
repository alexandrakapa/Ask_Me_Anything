import {HttpService, Injectable, NotFoundException} from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios'
import { map } from "rxjs/operators";
import {Question} from "../../../data-layer/src/question/question.entity";

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

  findQuestionById(questionId: number): Observable<AxiosResponse<any>> {  //return one question by question id
    return this.httpService.get(`http://localhost:3000/question/byId/6`)
        .pipe(
            map(response => response.data),
        );
  }

}
