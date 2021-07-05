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
        const my_addr = "http://localhost:3001";
        const create_answer = await client.hget("run_services", "create_answer");
        if (create_answer != my_addr + "/answer/create") {
            let obj = [my_addr + "/answer/create", "post", "auth"];
            const res1 = await client.hset("run_services", "create_answer", JSON.stringify(obj));
        }
        const find_all_questions = await client.hget("run_services", "find_all_questions");
        if (!find_all_questions || find_all_questions[0] != my_addr + "/question/andanswers") {
            let obj = [my_addr + "/question/andanswers", "get", "auth"];
            const res2 = await client.hset("run_services", "find_all_questions", JSON.stringify(obj));
        }
        const get_questions_by_id = await client.hget("run_services", "get_all_questions_by_id");
        if (!get_questions_by_id || get_questions_by_id[0] != my_addr + "/question/user/all/:askedFrom") {
            let obj = [my_addr + "/question/user/all/:askedFrom", "get", "auth"];
            const res3 = await client.hset("run_services", "get_all_questions_by_id", JSON.stringify(obj));
        }
        const create_question = await client.hget("run_services", "create_question");
        if (!create_question || create_question[0] != my_addr + "/question/create") {
            let obj = [my_addr + "/question/create", "post", "auth"];
            const res4 = await client.hset("run_services", "create_question", JSON.stringify(obj));
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