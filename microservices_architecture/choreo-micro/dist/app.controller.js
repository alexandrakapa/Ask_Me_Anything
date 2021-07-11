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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const nestjs_redis_1 = require("nestjs-redis");
let AppController = class AppController {
    constructor(appService, httpService, redisService) {
        this.appService = appService;
        this.httpService = httpService;
        this.redisService = redisService;
    }
    async getEvent(req, res) {
        const client = await this.redisService.getClient();
        const category = req.body.category;
        if (category == "question") {
            const saved_subs = await client.hget('subscribers', 'question');
            for (let i = 0; i < saved_subs.length; i++) {
                await this.httpService
                    .post(saved_subs[i], { id: req.body.id })
                    .toPromise();
            }
        }
        else if (category == "answer") {
            const saved_subs = await client.hget('subscribers', 'answer');
            for (let i = 0; i < saved_subs.length; i++) {
                let cur_addr = saved_subs[i];
                console.log(cur_addr);
                await this.httpService
                    .post(cur_addr, {
                    id: req.body.id,
                    text: req.body.text,
                    answeredFrom: req.body.answeredFrom,
                    answeredOn: req.body.answeredOn,
                    isAnAnswerOf: req.body.isAnAnswerOf,
                })
                    .toPromise();
            }
        }
        res.send('ok');
    }
};
__decorate([
    common_1.Post('bus'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getEvent", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService, common_1.HttpService, nestjs_redis_1.RedisService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map