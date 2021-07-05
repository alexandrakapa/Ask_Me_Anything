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
import { Keyword } from '../keyword/keyword.entity';

@Entity()
export class Question {

  @PrimaryColumn()
  question_id : number;

  @CreateDateColumn()
  askedOn: Date;

  @Column()
  askedFrom :number;

  @ManyToMany(type => Keyword, { cascade: true })
  @JoinTable({ name: 'question_keyword', joinColumn: { name: 'question_id', referencedColumnName: 'question_id'}, inverseJoinColumn: { name: 'keyword_id', referencedColumnName: 'keyword_id'}, })
  keywords: Keyword[];

}