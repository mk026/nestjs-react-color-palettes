import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { PaletteModule } from './palette/palette.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, PaletteModule],
})
export class AppModule {}
