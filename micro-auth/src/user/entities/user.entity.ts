import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Unique } from "typeorm";
import { sha512 } from 'sha512-crypt-ts';
import { randomBytes } from 'crypto';
@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('varchar', { length: 500, unique: false })
  FirstName: string;

  @Column('varchar', { length: 500, unique: false })
  LastName: string;

  @Column('varchar', { length: 500, unique: true })
  username: string;

  @Column('varchar', { length: 500, unique: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const ran = randomBytes(8).toString('base64');
    const salt = '$6$rounds=1000$' + ran;
    this.password = sha512.crypt(this.password, salt);
  }
}
