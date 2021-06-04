import { Question } from '../question/question.entity';
export declare class Answer {
    answer_id: number;
    text: string;
    answeredOn: Date;
    answeredFrom: number;
    isAnAnswerOf: Question;
}
