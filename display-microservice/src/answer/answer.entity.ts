import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from '../companies/company.entity';
import { Question } from '../question/question.entity';
import { User } from '../user/user.entity';

@Entity()
export class Answer {

  @PrimaryGeneratedColumn()
  answer_id : number;

  @Column()
  text: string;

  @CreateDateColumn()
  answeredOn: Date;

  @ManyToOne(() => User, (answeredFrom) => answeredFrom.answers)
  public answeredFrom: User;

  @ManyToOne(() => Question, (isAnAnswerOf) => isAnAnswerOf.answers)
  public isAnAnswerOf: Question;


}