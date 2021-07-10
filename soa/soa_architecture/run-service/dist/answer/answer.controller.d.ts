import { AnswerService } from './answer.service';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    addAnswer(body: any, headers: any): Promise<import("rxjs").Observable<any> | "not authorized!">;
    findAllByQuestionId(isAnAnswerOf: number): Promise<any>;
}
