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
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let AnswerService = class AnswerService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    createAnswer(body) {
        return this.httpService.post(`http://localhost:3000/answer/create`, body)
            .pipe(operators_1.map(result => result.data));
    }
    findAnswersByQuestionId(isAnAnswerOf) {
        return this.httpService.get(`http://localhost:3000/answer/all/` + isAnAnswerOf)
            .pipe(operators_1.map(result => result.data));
    }
};
AnswerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map