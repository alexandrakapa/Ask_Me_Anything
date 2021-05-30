import { EntityManager } from "typeorm";
import { Answer } from "./answer.entity";
import { CreateAnswerDto } from './dto/create-answer.dto';
export declare class AnswerService {
    private manager;
    constructor(manager: EntityManager);
    createAnswer(CreateAnswerDto: CreateAnswerDto): Promise<Answer>;
}
