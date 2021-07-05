import { HttpService, OnModuleInit } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { RedisService } from "nestjs-redis";
export declare class AppService implements OnModuleInit {
    private jwtService;
    private httpService;
    private readonly redisService;
    constructor(jwtService: JwtService, httpService: HttpService, redisService: RedisService);
    onModuleInit(): Promise<string>;
    register(req_body: any): Promise<import("rxjs").Observable<any>>;
    verif(tok: any): Promise<void>;
}
