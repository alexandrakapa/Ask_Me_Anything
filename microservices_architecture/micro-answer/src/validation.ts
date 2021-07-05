import { IsNumber } from 'class-validator';

export class ObjectWithId {
  @IsNumber()
  readonly id: number;
}