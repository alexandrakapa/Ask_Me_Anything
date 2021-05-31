import { HttpService } from '@nestjs/common';
import { Observable } from "rxjs";
export declare class AnswerService {
    private httpService;
    constructor(httpService: HttpService);
    createAnswer(body: any): Observable<any>;
}
