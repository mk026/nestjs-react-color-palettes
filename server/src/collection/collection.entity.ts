import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Palette } from '../palette/palette.entity';
import { User } from '../user/user.entity';

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, (user) => user.collections)
  author: User;

  @ManyToMany(() => Palette, (palette) => palette.collections)
  @JoinTable()
  palettes: Palette[];

  @ManyToMany(() => User, (user) => user.favoriteCollections)
  inFavorites: User[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
