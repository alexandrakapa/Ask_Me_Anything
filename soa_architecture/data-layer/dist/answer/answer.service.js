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
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const answer_entity_1 = require("./answer.entity");
const question_entity_1 = require("../question/question.entity");
let AnswerService = class AnswerService {
    constructor(manager) {
        this.manager = manager;
    }
    async createAnswer(CreateAnswerDto) {
        return this.manager.transaction(async (manager) => {
            console.log(CreateAnswerDto);
            const quizId = CreateAnswerDto.isAnAnswerOf;
            if (!quizId)
                throw new common_1.BadRequestException('Quiz id missing.');
            const quiz = await this.manager.findOne(question_entity_1.Question, quizId);
            if (!quiz)
                throw new common_1.NotFoundException(`Quiz ${quizId} not found.`);
            const answer = await this.manager.create(answer_entity_1.Answer, CreateAnswerDto);
            answer.isAnAnswerOf = quiz;
            return this.manager.save(answer);
        });
    }
};
AnswerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map