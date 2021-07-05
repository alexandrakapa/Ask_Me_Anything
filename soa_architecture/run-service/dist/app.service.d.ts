import { OnModuleInit } from '@nestjs/common';
import { RedisService } from "nestjs-redis";
export declare class AppService implements OnModuleInit {
    private readonly redisService;
    constructor(redisService: RedisService);
    onModuleInit(): Promise<string>;
    getHello(): string;
}
