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
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const answer_entity_1 = require("../answer/answer.entity");
const keyword_entity_1 = require("../keyword/keyword.entity");
const user_entity_1 = require("../user/user.entity");
let Question = class Question {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Question.prototype, "question_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "text", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Question.prototype, "askedOn", void 0);
__decorate([
    typeorm_1.OneToMany(() => answer_entity_1.Answer, (answer) => answer.isAnAnswerOf),
    __metadata("design:type", Array)
], Question.prototype, "answers", void 0);
__decorate([
    typeorm_1.ManyToMany(type => keyword_entity_1.Keyword, { cascade: true }),
    typeorm_1.JoinTable({ name: 'question_keyword', joinColumn: { name: 'question_id', referencedColumnName: 'question_id' }, inverseJoinColumn: { name: 'keyword_id', referencedColumnName: 'keyword_id' }, }),
    __metadata("design:type", Array)
], Question.prototype, "keywords", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (askedFrom) => askedFrom.questions),
    __metadata("design:type", user_entity_1.User)
], Question.prototype, "askedFrom", void 0);
Question = __decorate([
    typeorm_1.Entity()
], Question);
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map