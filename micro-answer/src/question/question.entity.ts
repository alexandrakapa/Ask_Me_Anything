import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer } from '../answer/entities/answer.entity';

@Entity()
export class Question {

  @PrimaryGeneratedColumn()
  question_id : number;



  @OneToMany(() => Answer, (answer) => answer.isAnAnswerOf)
  public answers: Answer[];




}