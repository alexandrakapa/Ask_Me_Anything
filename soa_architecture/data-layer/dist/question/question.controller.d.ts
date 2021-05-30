import { QuestionService } from './question.service';
import { Question } from "./question.entity";
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getAll(): Promise<Question[]>;
    findAllByUser(askedFrom: number): Promise<Question[]>;
    addQuestion(body: Question): Promise<void>;
    getByDay(): Promise<Question[]>;
}
