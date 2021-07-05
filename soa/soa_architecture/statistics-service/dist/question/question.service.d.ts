import { HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios';
import { RedisService } from "nestjs-redis";
export declare class QuestionService {
    private httpService;
    private redisService;
    constructor(httpService: HttpService, redisService: RedisService);
    findByDay(): Observable<AxiosResponse<any>>;
    findByKeyword(): Observable<AxiosResponse<any>>;
    checkTok(token: any): Promise<any>;

    findByDayUser(user: number): Observable<AxiosResponse<any>>;
    findByKeywordUser(user: number): Observable<AxiosResponse<any>>;
}
