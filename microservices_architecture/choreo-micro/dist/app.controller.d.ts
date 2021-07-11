import { HttpService } from "@nestjs/common";
import { AppService } from './app.service';
import { RedisService } from "nestjs-redis";
export declare class AppController {
    private readonly appService;
    private httpService;
    private readonly redisService;
    constructor(appService: AppService, httpService: HttpService, redisService: RedisService);
    getEvent(req: any, res: any): Promise<void>;
}
