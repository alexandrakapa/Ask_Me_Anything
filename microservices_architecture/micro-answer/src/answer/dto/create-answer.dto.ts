import { IsString, IsNotEmpty, IsDate, IsNumber, IsDefined, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { ObjectWithId } from '../../validation';
import { CreateDateColumn, ManyToOne } from "typeorm";
import { Question } from '../../question/question.entity';

export class CreateAnswerDto {

  @IsString()
  @IsNotEmpty()
  readonly text: string;


  @CreateDateColumn()
  @IsNotEmpty()
  readonly answeredOn: Date;

  @IsNumber()
  @IsNotEmpty()
  readonly answeredFrom: number;



  @ManyToOne(() => Question, question => question.answers)
  isAnAnswerOf: Question;

}