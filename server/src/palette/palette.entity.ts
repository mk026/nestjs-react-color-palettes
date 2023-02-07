import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Palette {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ array: true })
  colors: string[];
}
