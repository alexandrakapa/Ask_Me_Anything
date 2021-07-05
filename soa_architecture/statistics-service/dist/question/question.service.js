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
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const nestjs_redis_1 = require("nestjs-redis");
let QuestionService = class QuestionService {
    constructor(httpService, redisService) {
        this.httpService = httpService;
        this.redisService = redisService;
    }
    findByDay() {
        return this.httpService.get('http://localhost:3000/question/statistics/byDay')
            .pipe(operators_1.map(response => response.data));
    }
    findByKeyword() {
        return this.httpService.get('http://localhost:3000/question/statistics/byKeyword')
            .pipe(operators_1.map(response => response.data));
    }
    async checkTok(token) {
        const client = await this.redisService.getClient();
        const get_addr = await client.hget("sb", "addr");
        const auth_get_addr = get_addr + "/auth/check_tok";
        const config = {
            headers: { Authorization: token }
        };
        console.log("config: " + auth_get_addr);
        console.log(config);
        if (auth_get_addr != "nil") {
            let res = await this.httpService.get(auth_get_addr, config)
                .pipe(operators_1.catchError(e => {
                throw new common_1.HttpException("error", 400);
            })).toPromise();
            console.log("here: " + res.data);
            return res.data;
        }
        else {
            return 0;
        }
    }
};
QuestionService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService, nestjs_redis_1.RedisService])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map