import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Keyword {

  @PrimaryGeneratedColumn()
  keyword_id : number;

  @Column()
  keyword_phrase: string;

}