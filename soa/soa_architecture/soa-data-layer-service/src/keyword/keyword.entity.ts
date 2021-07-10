import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Keyword {

  @PrimaryGeneratedColumn()
  keyword_id : number;

  @Column({unique:true})
  keyword_phrase: string;

}