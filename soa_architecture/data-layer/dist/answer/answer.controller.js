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
exports.AnswerController = void 0;
const common_1 = require("@nestjs/common");
const answer_service_1 = require("./answer.service");
const create_answer_dto_1 = require("./dto/create-answer.dto");
let AnswerController = class AnswerController {
    constructor(answerService) {
        this.answerService = answerService;
    }
    addAnswer(createQuizDto) {
        return this.answerService.createAnswer(createQuizDto);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_answer_dto_1.CreateAnswerDto]),
    __metadata("design:returntype", Promise)
], AnswerController.prototype, "addAnswer", null);
AnswerController = __decorate([
    common_1.Controller('answer'),
    __metadata("design:paramtypes", [answer_service_1.AnswerService])
], AnswerController);
exports.AnswerController = AnswerController;
//# sourceMappingURL=answer.controller.js.map