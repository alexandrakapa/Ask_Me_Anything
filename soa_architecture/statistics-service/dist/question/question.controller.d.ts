import { QuestionService } from './question.service';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getByDay(): Promise<any>;
    getByKeyword(): Promise<any>;
}
