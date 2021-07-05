import { Answer } from '../answer/answer.entity';
import { Keyword } from '../keyword/keyword.entity';
import { UserEntity } from "../user/entities/user.entity";
export declare class Question {
    question_id: number;
    title: string;
    text: string;
    askedOn: Date;
    answers: Answer[];
    keywords: Keyword[];
    askedFrom: UserEntity;
}
