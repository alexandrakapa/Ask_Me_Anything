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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const operators_1 = require("rxjs/operators");
let AuthService = class AuthService {
    constructor(jwtService, httpService) {
        this.jwtService = jwtService;
        this.httpService = httpService;
    }
    async validateUser(username, pass) {
        return this.httpService.post(' http://localhost:3000/data-layer/user/validate', { username: username, password: pass }).pipe(operators_1.map(result => result.data));
    }
    async login(user) {
        const payload = { username: user.userName };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        common_1.HttpService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map