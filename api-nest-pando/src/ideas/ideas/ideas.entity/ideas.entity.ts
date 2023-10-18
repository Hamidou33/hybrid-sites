import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Idea {
  @PrimaryGeneratedColumn('increment')
  id?: number;
  // @Column({primary: true, unique: true, nullable: false, generated: "increment"})
  // id?: number;

  @Column({ length: 25 })
  description: string;

  @Column({nullable: false, type: 'datetime' })
  dateEnvoi: Date;
}
