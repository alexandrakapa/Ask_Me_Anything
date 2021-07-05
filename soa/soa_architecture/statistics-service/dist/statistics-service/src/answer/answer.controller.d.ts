import { AnswerService } from './answer.service';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    getByDayUser(user: number): Promise<any>;
}
