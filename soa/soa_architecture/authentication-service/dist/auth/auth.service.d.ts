import { HttpService } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    private httpService;
    constructor(jwtService: JwtService, httpService: HttpService);
    validateUser(username: string, pass: string): Promise<any>;
    login(given_id: any): Promise<{
        accessToken: string;
        id: any;
    }>;
}
