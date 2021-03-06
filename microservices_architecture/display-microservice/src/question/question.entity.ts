import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany, PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer } from '../answer/answer.entity';
import { Keyword } from '../keyword/keyword.entity';

@Entity()
export class Question {

  @PrimaryColumn()
  question_id : number;

  @Column()
  title: string;

  @Column()
  text: string;

  @CreateDateColumn()
  askedOn: Date;

  @Column()
  askedFrom: number;

  @OneToMany(() => Answer, (answer) => answer.isAnAnswerOf, {
    cascade: ['insert', 'update'],
  })
  public answers: Answer[];


  @ManyToMany(type => Keyword, { cascade: true })
  @JoinTable({ name: 'question_keyword', joinColumn: { name: 'question_id', referencedColumnName: 'question_id'}, inverseJoinColumn: { name: 'keyword_id', referencedColumnName: 'keyword_id'}, },)
  keywords: Keyword[];

}