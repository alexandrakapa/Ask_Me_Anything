import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany, ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Answer } from '../answer/answer.entity';
import { Keyword } from '../keyword/keyword.entity';
import { User } from "../user/user.entity";

@Entity()
export class Question {

  @PrimaryGeneratedColumn()
  question_id : number;

  @Column()
  title: string;

  @Column()
  text: string;

  @CreateDateColumn()
  askedOn: Date;

  @OneToMany(() => Answer, (answer) => answer.isAnAnswerOf)
  public answers: Answer[];


  @ManyToMany(type => Keyword, { cascade: true })
  @JoinTable({ name: 'question_keyword', joinColumn: { name: 'question_id', referencedColumnName: 'question_id'}, inverseJoinColumn: { name: 'keyword_id', referencedColumnName: 'keyword_id'}, })
  keywords: Keyword[];

  @ManyToOne(() => User, (askedFrom) => askedFrom.questions)
  public askedFrom: User;

}