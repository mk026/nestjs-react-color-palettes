import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { FavoriteModule } from './favorite/favorite.module';
import { CollectionModule } from './collection/collection.module';
import { CommentModule } from './comment/comment.module';
import { PaletteModule } from './palette/palette.module';
import { UserModule } from './user/user.module';
import { validate } from './validation/env.validation';
import typeormConfig from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRootAsync({ useFactory: typeormConfig }),
    AuthModule,
    UserModule,
    PaletteModule,
    CollectionModule,
    CommentModule,
    FavoriteModule,
  ],
})
export class AppModule {}
