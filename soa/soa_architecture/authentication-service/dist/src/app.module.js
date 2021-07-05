"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const jwt_strategy_1 = require("./auth/jwt.strategy");
const jwt_1 = require("@nestjs/jwt");
const nestjs_redis_1 = require("nestjs-redis");
const config_1 = require("@nestjs/config");
const options = { host: 'localhost',
    port: 6379,
    ttl: null };
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            auth_module_1.AuthModule,
            common_1.HttpModule,
            config_1.ConfigModule,
            jwt_1.JwtModule.register({
                secret: 'secret',
                signOptions: {
                    expiresIn: '7d',
                },
            }),
            nestjs_redis_1.RedisModule.register(options),
            jwt_strategy_1.JwtStrategy,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map