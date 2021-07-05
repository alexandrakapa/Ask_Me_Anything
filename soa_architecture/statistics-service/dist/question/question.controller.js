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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async getByDay(head) {
        let auth_res = await this.questionService.checkTok(head.authorization);
        console.log("auth: " + auth_res);
        if (auth_res == 1) {
            return this.questionService.findByDay();
        }
        else {
            return "not authorized!";
        }
    }
    async getByKeyword(head) {
        let auth_res = await this.questionService.checkTok(head.authorization);
        console.log("auth: " + auth_res);
        if (auth_res == 1) {
            return this.questionService.findByKeyword();
        }
        else {
            return "not authorized!";
        }
    }
    async getByDayUser(user) {
        return this.questionService.findByDayUser(user);
    }
    async getByKeywordUser(user) {
        return this.questionService.findByKeywordUser(user);
    }
};
__decorate([
    common_1.Get('statistics/byDay'),
    __param(0, common_1.Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByDay", null);
__decorate([
    common_1.Get('statistics/byKeyword'),
    __param(0, common_1.Headers()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByKeyword", null);
__decorate([
    common_1.Get('statistics/byDay/:user'),
    __param(0, common_1.Param('user', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByDayUser", null);
__decorate([
    common_1.Get('statistics/byKeyword/:user'),
    __param(0, common_1.Param('user', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByKeywordUser", null);
QuestionController = __decorate([
    common_1.Controller('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map