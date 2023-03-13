import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Comment } from '../comment/comment.entity';
import { Collection } from '../collection/collection.entity';
import { Palette } from '../palette/palette.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Collection, (collection) => collection.author)
  collections: Collection[];

  @OneToMany(() => Palette, (palette) => palette.author)
  palettes: Palette[];

  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[];

  @ManyToMany(() => Collection, (collection) => collection.inFavorites)
  favoriteCollections: Collection[];

  @ManyToMany(() => Palette, (palette) => palette.inFavorites)
  favoritePalettes: Palette[];

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
