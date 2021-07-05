import { Answer } from "../answer/answer.entity";
import { Question } from "../question/question.entity";
export declare class User {
    id: number;
    FirstName: string;
    LastName: string;
    username: string;
    password: string;
    questions: Question[];
    answers: Answer[];
}
