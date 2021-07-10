import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  Unique, OneToMany
} from "typeorm";
import { sha512 } from 'sha512-crypt-ts';
import { randomBytes } from 'crypto';
import { Question } from "../../question/question.entity";
import { Answer } from "../../answer/answer.entity";
@Entity('User')
export class UserEntity {
  @BeforeInsert()
  async hashPassword() {
    const ran = randomBytes(8).toString('base64');
    const salt = '$6$rounds=1000$' + ran;
    this.password = sha512.crypt(this.password, salt);
  }
  @PrimaryGeneratedColumn()
  id: number;

  // @Column('varchar', { length: 500, unique: false })
  // FirstName: string;
  //
  // @Column('varchar', { length: 500, unique: false })
  // LastName: string;

  @Column('varchar', { length: 500, unique: true })
  username: string;

  @Column('varchar', { length: 500, unique: false })
  password: string;

  @OneToMany(() => Question, (question) => question.askedFrom)
  public questions: Question[];

  @OneToMany(() => Answer, (answer) => answer.answeredFrom)
  public answers: Answer[];
}
