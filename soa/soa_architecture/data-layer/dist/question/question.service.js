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
    async findQuestionById(question_id) {
        const values = this.questionRepo.createQueryBuilder("question")
            .leftJoinAndSelect("question.askedFrom", "user")
            .select(['question.question_id', 'question.title', 'question.text', 'question.askedOn', 'user.username'])
            .where("question.question_id = :cur_id", { cur_id: question_id })
            .execute();
        return values;
    }
    findAll() {
        const values = this.questionRepo.createQueryBuilder("question")
            .leftJoinAndSelect("question.answers", "answer")
            .leftJoinAndSelect("question.askedFrom", "user")
            .select(['question.question_id', 'question.title', 'question.text', 'question.askedOn', 'answer.text', 'answer.answeredOn', 'answer.answeredFrom', 'user.username'])
            .getMany();
        return values;
    }
    findSome() {
        return this.questionRepo.find({ relations: ["answers"], order: {
                question_id: "DESC",
            }, take: 10 });
    }
    async findAllKeywords() {
        const qb = await this.questionRepo
            .createQueryBuilder("question")
            .select(`question.question_id,"keyword_phrase"`)
            .innerJoin('question_keyword', 'question_keyword', 'question.question_id = question_keyword.question_id')
            .innerJoin('keyword', 'keyword', 'question_keyword.keyword_id = keyword.keyword_id');
        console.log(qb.getSql());
        return qb.getRawMany();
    }
    async findAllQuestionsByUser(askedFrom) {
        return this.questionManager.find(question_entity_1.Question, { askedFrom: askedFrom });
    }
    async createQuestion(title, text, user, keywords) {
        const keys = [];
        if (typeof keywords == "string") {
            console.log("string: " + keywords);
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
                console.log("array: " + keywords);
                console.log("cur: " + keywords[i]);
                const cur_key = await typeorm_3.getManager()
                    .createQueryBuilder(keyword_entity_1.Keyword, 'keyword')
                    .where('keyword_phrase = :phrase', { phrase: keywords[i] })
                    .getOne();
                if (cur_key) {
                    console.log("here true");
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
    async findByDayUser(user) {
        const qb = await this.questionRepo
            .createQueryBuilder("question")
            .select(`DATE_TRUNC('day', "askedOn") AS questions_per_day, COUNT(question_id) AS count`)
            .where(`question.askedFrom = ${user}`)
            .groupBy(`DATE_TRUNC('day',"askedOn")`)
            .orderBy(`questions_per_day`);
        return qb.getRawMany();
    }
    async findByKeywordUser(user) {
        const qb = await this.questionRepo
            .createQueryBuilder("question")
            .select(`keyword.keyword_id,"keyword_phrase", COUNT(question.question_id) AS count`)
            .innerJoin('question_keyword', 'question_keyword', 'question.question_id = question_keyword.question_id')
            .innerJoin('keyword', 'keyword', 'question_keyword.keyword_id = keyword.keyword_id')
            .where(`question.askedFrom = ${user}`)
            .groupBy(`keyword.keyword_id`)
            .orderBy(`count`);
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