import { QuestionService } from './question.service';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getByDay(head: any): Promise<any>;
    getByKeyword(head: any): Promise<any>;
}
