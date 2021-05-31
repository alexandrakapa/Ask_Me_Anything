import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "../answer/answer.entity";
import { Question } from "../question/question.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 500, unique: false })
  FirstName: string;

  @Column('varchar', { length: 500, unique: false })
  LastName: string;

  @Column('varchar', { length: 500, unique: true })
  username: string;

  @Column('varchar', { length: 500, unique: false })
  password: string;

  @OneToMany(() => Question, (question) => question.askedFrom)
  public questions: Question[];

  @OneToMany(() => Answer, (answer) => answer.answeredFrom)
  public answers: Answer[];

}