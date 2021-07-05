import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../question/question.entity';

@Entity()
export class Answer {

  @PrimaryColumn()
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