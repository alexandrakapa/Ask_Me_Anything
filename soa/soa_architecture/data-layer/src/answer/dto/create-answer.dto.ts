import { IsString, IsNotEmpty, IsDate, IsNumber } from "class-validator";
import { ManyToOne } from 'typeorm';
import { Question } from '../../question/question.entity';

export class CreateAnswerDto {

  @IsString()
  @IsNotEmpty()
  readonly text: string;


  @IsDate()
  @IsNotEmpty()
  readonly answeredOn: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly answeredFrom: number;



  @ManyToOne(() => Question, question => question.answers)
  isAnAnswerOf: Question;

}