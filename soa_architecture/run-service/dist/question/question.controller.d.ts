import { QuestionService } from './question.service';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getAll(): Promise<any>;
    getAllQuestionsByUserId(askedFrom: number): Promise<any>;
    addQuestion(body: any): Promise<import("rxjs").Observable<any>>;
}
