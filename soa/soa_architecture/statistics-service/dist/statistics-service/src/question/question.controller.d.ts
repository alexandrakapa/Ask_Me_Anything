import { QuestionService } from './question.service';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getNikos(): Promise<string>;
    getByDay(head: any): Promise<any>;
    getByKeyword(head: any): Promise<any>;
    getByDayUser(user: number): Promise<any>;
    getByKeywordUser(user: number): Promise<any>;
}
