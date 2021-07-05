import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Keyword {

  @PrimaryColumn()
  keyword_id : number;

  @Column()
  keyword_phrase: string;

}