import { Question } from '../../question/question.entity';
import { UserEntity } from "../../user/entities/user.entity";
export declare class CreateAnswerDto {
    readonly text: string;
    readonly answeredOn: Date;
    answeredFrom: UserEntity;
    isAnAnswerOf: Question;
}
