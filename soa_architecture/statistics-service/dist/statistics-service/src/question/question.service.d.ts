import { HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios';
export declare class QuestionService {
    private httpService;
    constructor(httpService: HttpService);
    findByDay(): Observable<AxiosResponse<any>>;
    findByKeyword(): Observable<AxiosResponse<any>>;
    findByDayUser(user: number): Observable<AxiosResponse<any>>;
    findByKeywordUser(user: number): Observable<AxiosResponse<any>>;
}
