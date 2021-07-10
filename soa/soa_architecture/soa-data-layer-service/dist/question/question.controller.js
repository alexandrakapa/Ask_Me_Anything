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
const question_entity_1 = require("./question.entity");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async getAll() {
        return await this.questionService.findAll();
    }
    async getSomeAnswers() {
        return await this.questionService.findSome();
    }
    async getAllKeywords() {
        return await this.questionService.findAllKeywords();
    }
    findOneById(question_id) {
        return this.questionService.findQuestionById(question_id);
    }
    findAllByUser(askedFrom) {
        return this.questionService.findAllQuestionsByUser(askedFrom);
    }
    async addQuestion(body) {
        console.log(body.title);
        console.log(body.text);
        console.log(body.askedFrom);
        console.log(body.keywords);
        const generatedId = this.questionService.createQuestion(body.title, body.text, body.askedFrom, body.keywords);
    }
    async getByDay() {
        return await this.questionService.findByDay();
    }
    async getByKeyword() {
        return await this.questionService.findByKeyword();
    }
    async getByDayUser(user) {
        return await this.questionService.findByDayUser(user);
    }
    async getByKeywordUser(user) {
        return await this.questionService.findByKeywordUser(user);
    }
};
__decorate([
    common_1.Get('andanswers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAll", null);
__decorate([
    common_1.Get('some_answers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getSomeAnswers", null);
__decorate([
    common_1.Get('andkeywords'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getAllKeywords", null);
__decorate([
    common_1.Get('/byId/:question_id'),
    __param(0, common_1.Param('question_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findOneById", null);
__decorate([
    common_1.Get('user/all/:askedFrom'),
    __param(0, common_1.Param('askedFrom', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findAllByUser", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_entity_1.Question]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "addQuestion", null);
__decorate([
    common_1.Get('statistics/byDay'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByDay", null);
__decorate([
    common_1.Get('statistics/byKeyword'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByKeyword", null);
__decorate([
    common_1.Get('statistics/byDay/:user'),
    __param(0, common_1.Param('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByDayUser", null);
__decorate([
    common_1.Get('statistics/byKeyword/:user'),
    __param(0, common_1.Param('user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "getByKeywordUser", null);
QuestionController = __decorate([
    common_1.Controller('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map