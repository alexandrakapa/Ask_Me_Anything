"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("nestjs-redis");
let AppService = class AppService {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async onModuleInit() {
        console.log(`The module has been initialized.`);
        console.log("nikos");
        const client = await this.redisService.getClient();
        const my_addr = "http://localhost:3005/question/statistics";
        const stats_day_addr = await client.hget("stats_services", "day");
        if (!stats_day_addr || stats_day_addr[0] != my_addr + "/byDay") {
            let obj = [my_addr + "/byDay", "get", "auth"];
            const res1 = await client.hset("stats_services", "day", JSON.stringify(obj));
        }
        const stats_key_addr = await client.hget("stats_services", "keyword");
        if (!stats_key_addr || stats_key_addr[0] != my_addr + "/byKeyword") {
            let obj = [my_addr + "/byKeyword", "get", "auth"];
            const res2 = await client.hset("stats_services", "keyword", JSON.stringify(obj));
        }
        return "ok";
    }
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_redis_1.RedisService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map