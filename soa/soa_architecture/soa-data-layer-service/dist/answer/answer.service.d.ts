import { EntityManager, Repository } from "typeorm";
import { Answer } from "./answer.entity";
import { CreateAnswerDto } from './dto/create-answer.dto';
export declare class AnswerService {
    private answerRepo;
    private manager;
    constructor(answerRepo: Repository<Answer>, manager: EntityManager);
    createAnswer(CreateAnswerDto: CreateAnswerDto): Promise<Answer>;
    findAnswersByQuestionId(isAnAnswerOf: any): Promise<Answer[]>;
    findByDayUser(user: any): Promise<Answer[]>;
}
