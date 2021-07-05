import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../question/question.entity';
import { UserEntity } from "../user/entities/user.entity";

@Entity()
export class Answer {

  @PrimaryGeneratedColumn()
  answer_id : number;

  @Column()
  text: string;

  @CreateDateColumn()
  answeredOn: Date;

  @Column()
  answeredFrom: number;


  @ManyToOne(() => Question, (isAnAnswerOf) => isAnAnswerOf.answers)
  public isAnAnswerOf: Question;


}