import { Question } from '../question/question.entity';
import { UserEntity } from "../user/entities/user.entity";
export declare class Answer {
    answer_id: number;
    text: string;
    answeredOn: Date;
    isAnAnswerOf: Question;
    answeredFrom: UserEntity;
}
