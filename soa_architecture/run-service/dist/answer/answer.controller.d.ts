import { AnswerService } from './answer.service';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    addAnswer(body: any): Promise<import("rxjs").Observable<any>>;
}
