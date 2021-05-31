import { HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios';
export declare class QuestionService {
    private httpService;
    constructor(httpService: HttpService);
    findAll(): Observable<AxiosResponse<any>>;
    findAllQuestionsByUserId(askedFrom: number): Observable<AxiosResponse<any>>;
    createQuestion(body: any): Observable<any>;
}
