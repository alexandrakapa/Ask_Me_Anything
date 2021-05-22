import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Keyword {

  @PrimaryGeneratedColumn()
  keyword_id : number;

  @Column()
  Keyword_phrase: string;

}