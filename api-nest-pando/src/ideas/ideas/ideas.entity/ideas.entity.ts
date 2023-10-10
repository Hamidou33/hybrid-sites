import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Idea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  description: string;

  @Column('date')
  dateEnvoi: Date;
}
