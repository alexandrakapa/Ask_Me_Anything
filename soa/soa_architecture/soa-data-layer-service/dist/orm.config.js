"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    port: 5432,
    host: 'ec2-54-73-58-75.eu-west-1.compute.amazonaws.com',
    database: 'dfuqtjtbav32g5',
    username: "vzaupbvehmnwra",
    password: "667abbe3dcf023cdfd0a4fad6a5944feb6dbe3f18816ca025302383516a7769f",
    synchronize: true,
    ssl: { "rejectUnauthorized": false },
    entities: ['dist/**/*.entity{.ts,.js}'],
};
//# sourceMappingURL=orm.config.js.map