import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ length: 300 })
  comment: string;

  @Column({ length: 100 })
  date: string;

  @Column({ length: 45 })
  name: string;
}
