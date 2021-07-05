import { Question } from "../../question/question.entity";
import { Answer } from "../../answer/answer.entity";
export declare class UserEntity {
    hashPassword(): Promise<void>;
    id: number;
    FirstName: string;
    LastName: string;
    username: string;
    password: string;
    questions: Question[];
    answers: Answer[];
}
