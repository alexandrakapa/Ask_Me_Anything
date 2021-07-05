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
const jwt_1 = require("@nestjs/jwt");
const operators_1 = require("rxjs/operators");
const nestjs_redis_1 = require("nestjs-redis");
const jwt = require("jsonwebtoken");
let AppService = class AppService {
    constructor(jwtService, httpService, redisService) {
        this.jwtService = jwtService;
        this.httpService = httpService;
        this.redisService = redisService;
    }
    async onModuleInit() {
        console.log(`The module has been initialized.`);
        console.log("nikos");
        const client = await this.redisService.getClient();
        const my_addr = "http://localhost:3100";
        const reg_get_addr = await client.hget("auth", "register");
        if (!reg_get_addr || reg_get_addr[0] != my_addr + "/create") {
            console.log("problem1");
            let obj = [my_addr + "/create", "post", "no_auth"];
            const res1 = await client.hset("auth", "register", JSON.stringify(obj));
        }
        const log_get_addr = await client.hget("auth", "login");
        if (!log_get_addr || log_get_addr[0] != my_addr + "/auth/login") {
            console.log("problem2");
            let obj = [my_addr + "/auth/login", "post", "no_auth"];
            const res2 = await client.hset("auth", "login", JSON.stringify(obj));
        }
        const auth_get_addr = await client.hget("auth", "check");
        if (!auth_get_addr || auth_get_addr[0] != my_addr + "/auth/check") {
            console.log("problem3");
            let obj = [my_addr + "/auth/check", "post", "auth"];
            const res3 = await client.hset("auth", "check_tok", JSON.stringify(obj));
        }
        return "ok";
    }
    async register(req_body) {
        return this.httpService.post(' http://localhost:3000/user/register', req_body).pipe(operators_1.map(result => result.data));
    }
    async verif(tok) {
        console.log(tok);
        await jwt.verify(tok, 'secret', function (err, decoded) {
            let failed = 0;
            if (err) {
                console.log(err);
                failed = 1;
            }
            if (failed) {
                console.log("not hree");
                return 0;
            }
            else {
                console.log("here");
                return 1;
            }
        });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        common_1.HttpService,
        nestjs_redis_1.RedisService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map