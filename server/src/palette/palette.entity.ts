import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Collection } from '../collection/collection.entity';
import { User } from '../user/user.entity';

@Entity()
export class Palette {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ array: true })
  colors: string[];

  @ManyToOne(() => User, (user) => user.palettes)
  author: User;

  @ManyToMany(() => Collection, (collection) => collection.palettes)
  collections: Collection[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
