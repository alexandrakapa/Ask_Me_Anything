import { IsString, IsNotEmpty, IsDate, IsNumber } from "class-validator";
import { ManyToOne } from 'typeorm';
import { Question } from '../../question/question.entity';
import {UserEntity} from "../../user/entities/user.entity";

export class CreateAnswerDto {

  @IsString()
  @IsNotEmpty()
  readonly text: string;


  @IsDate()
  @IsNotEmpty()
  readonly answeredOn: Date;

  // @IsNumber()
  // @IsNotEmpty()
  // readonly answeredFrom: number;
  @ManyToOne(() => UserEntity, (answeredFrom) => answeredFrom.questions)
  answeredFrom: UserEntity;


  @ManyToOne(() => Question, question => question.answers)
  isAnAnswerOf: Question;

}