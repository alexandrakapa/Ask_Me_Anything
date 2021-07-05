import { HttpService } from '@nestjs/common';
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";
export declare class AnswerService {
    private httpService;
    constructor(httpService: HttpService);
    findByDayUser(user: number): Observable<AxiosResponse<any>>;
}
