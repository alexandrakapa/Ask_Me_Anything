import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Keyword {

  @PrimaryGeneratedColumn()
  keyword_id : number;

  @Column()
  keyword_phrase: string;

}