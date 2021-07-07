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
exports.CreateAnswerDto = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const question_entity_1 = require("../../question/question.entity");
const user_entity_1 = require("../../user/entities/user.entity");
class CreateAnswerDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateAnswerDto.prototype, "text", void 0);
__decorate([
    class_validator_1.IsDate(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], CreateAnswerDto.prototype, "answeredOn", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.UserEntity, (answeredFrom) => answeredFrom.questions),
    __metadata("design:type", user_entity_1.UserEntity)
], CreateAnswerDto.prototype, "answeredFrom", void 0);
__decorate([
    typeorm_1.ManyToOne(() => question_entity_1.Question, question => question.answers),
    __metadata("design:type", question_entity_1.Question)
], CreateAnswerDto.prototype, "isAnAnswerOf", void 0);
exports.CreateAnswerDto = CreateAnswerDto;
//# sourceMappingURL=create-answer.dto.js.map