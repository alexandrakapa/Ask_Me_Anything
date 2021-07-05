import { AnswerService } from './answer.service';
import { Answer } from "./answer.entity";
import { CreateAnswerDto } from "./dto/create-answer.dto";
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    addAnswer(createQuizDto: CreateAnswerDto): Promise<Answer>;
    findAllByQuestionId(isAnAnswerOf: number): Promise<Answer[]>;
    getByDayUser(user: any): Promise<Answer[]>;
}
