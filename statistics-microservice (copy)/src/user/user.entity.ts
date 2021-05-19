import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Answer } from '../answer/answer.entity';
import { Question } from '../question/question.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  user_id : number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Question, (question) => question.askedFrom)
  public questions: Question[];

  @OneToMany(() => Answer, (answer) => answer.answeredFrom)
  public answers: Answer[];

}