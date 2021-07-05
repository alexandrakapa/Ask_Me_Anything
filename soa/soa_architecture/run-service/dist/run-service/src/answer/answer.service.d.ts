import { HttpService } from '@nestjs/common';
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
export declare class AnswerService {
    private httpService;
    constructor(httpService: HttpService);
    createAnswer(body: any): Observable<any>;
    findAnswersByQuestionId(isAnAnswerOf: any): Observable<AxiosResponse<any>>;
}
