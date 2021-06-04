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
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_entity_1 = require("./question.entity");
const typeorm_3 = require("typeorm");
const keyword_entity_1 = require("../keyword/keyword.entity");
let QuestionService = class QuestionService {
    constructor(questionRepo, questionManager) {
        this.questionRepo = questionRepo;
        this.questionManager = questionManager;
    }
    findAll() {
        return this.questionRepo.find({ relations: ["answers"] });
    }
    async findAllQuestionsByUser(askedFrom) {
        return this.questionManager.find(question_entity_1.Question, { askedFrom: askedFrom });
    }
    async createQuestion(title, text, user, keywords) {
        const keys = [];
        if (typeof keywords == "string") {
            const cur_key = await typeorm_3.getManager()
                .createQueryBuilder(keyword_entity_1.Keyword, 'keyword')
                .where('keyword_phrase = :phrase', { phrase: keywords })
                .getOne();
            if (cur_key) {
                keys.push(cur_key);
            }
            else {
                const keyword = new keyword_entity_1.Keyword();
                keyword.keyword_phrase = keywords;
                await this.questionManager.save(keyword);
                keys.push(keyword);
            }
        }
        else {
            for (let i = 0; i < keywords.length; i++) {
                const cur_key = await typeorm_3.getManager()
                    .createQueryBuilder(keyword_entity_1.Keyword, 'keyword')
                    .where('keyword_phrase = :phrase', { phrase: keywords[i] })
                    .getOne();
                if (cur_key) {
                    keys.push(cur_key);
                }
                else {
                    const keyword = new keyword_entity_1.Keyword();
                    keyword.keyword_phrase = keywords[i];
                    await this.questionManager.save(keyword);
                    keys.push(keyword);
                }
            }
        }
        const question = new question_entity_1.Question();
        question.title = title;
        question.text = text;
        question.askedFrom = user;
        question.keywords = keys;
        await this.questionManager.save(question);
    }
    async findByDay() {
        const qb = await this.questionRepo
            .createQueryBuilder("question")
            .select(`DATE_TRUNC('day', "askedOn") AS questions_per_day, COUNT(question_id) AS count`)
            .groupBy(`DATE_TRUNC('day',"askedOn")`)
            .orderBy(`questions_per_day`);
        console.log(qb.getSql());
        return qb.getRawMany();
    }
    async findByKeyword() {
        const qb = await this.questionRepo
            .createQueryBuilder("question")
            .select(`keyword.keyword_id,"keyword_phrase", COUNT(question.question_id) AS count`)
            .innerJoin('question_keyword', 'question_keyword', 'question.question_id = question_keyword.question_id')
            .innerJoin('keyword', 'keyword', 'question_keyword.keyword_id = keyword.keyword_id')
            .groupBy(`keyword.keyword_id`)
            .orderBy(`count`);
        console.log(qb.getSql());
        return qb.getRawMany();
    }
};
QuestionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(question_entity_1.Question)),
    __param(1, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.EntityManager])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map