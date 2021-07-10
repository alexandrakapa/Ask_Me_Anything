import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    private appService;
    constructor(authService: AuthService, appService: AppService);
    reg(request: Request): Promise<import("rxjs").Observable<any>>;
    login(request: Request): Promise<string | {
        accessToken: string;
        id: any;
    }>;
    getTodos(): number;
}
