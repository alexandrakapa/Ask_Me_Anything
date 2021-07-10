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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const sha512_crypt_ts_1 = require("sha512-crypt-ts");
let UserService = class UserService {
    constructor(manager) {
        this.manager = manager;
    }
    async create(CreateUserDto) {
        console.log(CreateUserDto);
        const user = await this.manager.create(user_entity_1.UserEntity, CreateUserDto);
        return this.manager.save(user);
    }
    async findOne(userName) {
        console.log('here: ' + userName);
        console.log(this.manager.findOne(user_entity_1.UserEntity, userName));
        return this.manager.findOne(user_entity_1.UserEntity, { username: userName });
    }
    async validate(userName, passWord) {
        console.log("herer");
        const user = await this.findOne(userName);
        const origHash = user.password, parts = origHash.split('$'), rounds = parts[2], salt = '$' + parts[1] + '$' + rounds + '$' + parts[3];
        const hash = sha512_crypt_ts_1.sha512.crypt(passWord, salt);
        if (user && hash === origHash) {
            console.log("abyss: " + user.id);
            return user.id;
        }
        else {
            return -1;
        }
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map