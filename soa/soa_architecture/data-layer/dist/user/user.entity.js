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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const answer_entity_1 = require("../answer/answer.entity");
const question_entity_1 = require("../question/question.entity");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 500, unique: false }),
    __metadata("design:type", String)
], User.prototype, "FirstName", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 500, unique: false }),
    __metadata("design:type", String)
], User.prototype, "LastName", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 500, unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 500, unique: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(() => question_entity_1.Question, (question) => question.askedFrom),
    __metadata("design:type", Array)
], User.prototype, "questions", void 0);
__decorate([
    typeorm_1.OneToMany(() => answer_entity_1.Answer, (answer) => answer.answeredFrom),
    __metadata("design:type", Array)
], User.prototype, "answers", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map