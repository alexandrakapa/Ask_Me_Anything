import { HttpService } from '@nestjs/common';
import { Observable } from "rxjs";
import { RedisService } from "nestjs-redis";
import { AxiosResponse } from "axios";
export declare class AnswerService {
    private readonly redisService;
    private httpService;
    constructor(redisService: RedisService, httpService: HttpService);
    checkTok(token: any): Promise<any>;
    createAnswer(body: any): Observable<any>;
    findAnswersByQuestionId(isAnAnswerOf: any): Observable<AxiosResponse<any>>;
}
