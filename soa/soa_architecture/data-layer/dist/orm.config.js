"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: 'soa_architecture',
    username: "qna_admin",
    password: "1999",
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=orm.config.js.map