import { Question } from '../../question/question.entity';
export declare class CreateAnswerDto {
    readonly text: string;
    readonly answeredOn: Date;
    readonly answeredFrom: number;
    isAnAnswerOf: Question;
}
