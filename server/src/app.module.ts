import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { CollectionModule } from './collection/collection.module';
import { PaletteModule } from './palette/palette.module';
import { UserModule } from './user/user.module';
import { validate } from './validation/env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, validate }),
    AuthModule,
    UserModule,
    PaletteModule,
    CollectionModule,
  ],
})
export class AppModule {}
