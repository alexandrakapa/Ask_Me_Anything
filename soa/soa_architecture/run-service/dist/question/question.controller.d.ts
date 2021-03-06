import { QuestionService } from './question.service';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getAll(headers: any): Promise<any>;
    getSomeAnswers(): Promise<any>;
    getAllQuestionsByUserId(askedFrom: number, headers: any): Promise<any>;
    addQuestion(body: any, headers: any): Promise<import("rxjs").Observable<any> | "not authorized!">;
    findOneById(questionId: number, headers: any): Promise<any>;
}
