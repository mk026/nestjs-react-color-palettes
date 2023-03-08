import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Comment } from '../comment/comment.entity';
import { Collection } from '../collection/collection.entity';
import { User } from '../user/user.entity';

@Entity()
export class Palette {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ array: true })
  colors: string[];

  @ManyToOne(() => User, (user) => user.palettes)
  author: User;

  @OneToMany(() => Comment, (comment) => comment.palette)
  comments: Comment[];

  @ManyToMany(() => Collection, (collection) => collection.palettes)
  collections: Collection[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
