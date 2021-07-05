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
exports.KeywordController = void 0;
const common_1 = require("@nestjs/common");
const keyword_service_1 = require("./keyword.service");
let KeywordController = class KeywordController {
    constructor(keywordService) {
        this.keywordService = keywordService;
    }
};
KeywordController = __decorate([
    common_1.Controller('keyword'),
    __metadata("design:paramtypes", [keyword_service_1.KeywordService])
], KeywordController);
exports.KeywordController = KeywordController;
//# sourceMappingURL=keyword.controller.js.map