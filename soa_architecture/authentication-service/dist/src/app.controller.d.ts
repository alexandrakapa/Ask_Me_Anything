import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    private appService;
    constructor(authService: AuthService, appService: AppService);
    reg(reg_details: any): Promise<import("rxjs").Observable<any>>;
    login(log_dets: any): Promise<{
        accessToken: string;
    }>;
    getTodos(): number;
}
