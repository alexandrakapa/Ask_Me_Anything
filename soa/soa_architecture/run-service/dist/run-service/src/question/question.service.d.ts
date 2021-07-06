import { HttpService } from "@nestjs/common";
import { Observable } from "rxjs";
import { AxiosResponse } from 'axios';
import { RedisService } from "nestjs-redis";
export declare class QuestionService {
    private httpService;
    private readonly redisService;
    constructor(httpService: HttpService, redisService: RedisService);
    findSome(): Observable<AxiosResponse<any>>;
    findAll(): Observable<AxiosResponse<any>>;
    findAllQuestionsByUserId(askedFrom: number): Observable<AxiosResponse<any>>;
    checkTok(token: any): Promise<any>;
    createQuestion(body: any): Observable<any>;
    findQuestionById(questionId: number): Observable<AxiosResponse<any>>;
}
