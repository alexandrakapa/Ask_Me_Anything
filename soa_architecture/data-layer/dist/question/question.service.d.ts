import { EntityManager, Repository } from 'typeorm';
import { Question } from "./question.entity";
export declare class QuestionService {
    private questionRepo;
    private questionManager;
    constructor(questionRepo: Repository<Question>, questionManager: EntityManager);
    findAll(): Promise<Question[]>;
    findAllQuestionsByUser(askedFrom: any): Promise<Question[]>;
    createQuestion(title: any, text: any, user: any, keywords: any): Promise<void>;
    findByDay(): Promise<Question[]>;
    findByKeyword(): Promise<Question[]>;
}
