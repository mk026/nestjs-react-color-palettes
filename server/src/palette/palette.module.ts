import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Palette } from './palette.entity';
import { PaletteController } from './palette.controller';
import { PaletteService } from './palette.service';

@Module({
  imports: [TypeOrmModule.forFeature([Palette])],
  controllers: [PaletteController],
  providers: [PaletteService],
})
export class PaletteModule {}
