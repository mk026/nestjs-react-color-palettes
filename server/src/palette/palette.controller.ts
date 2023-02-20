import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePaletteDto } from './dto/create-palette.dto';
import { UpdatePaletteDto } from './dto/update-palette.dto';
import { PaletteService } from './palette.service';

@Controller('palettes')
export class PaletteController {
  constructor(private readonly paletteService: PaletteService) {}

  @Get()
  getPalettes() {
    return this.paletteService.getPalettes();
  }

  @Get(':id')
  getPalette(@Param('id', ParseIntPipe) id: number) {
    return this.paletteService.getPalette(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createPalette(@Body() createPaletteDto: CreatePaletteDto) {
    return this.paletteService.createPalette(createPaletteDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updatePalette(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaletteDto: UpdatePaletteDto,
  ) {
    return this.paletteService.updatePalette(id, updatePaletteDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deletePalette(@Param('id', ParseIntPipe) id: number) {
    return this.paletteService.deletePalette(id);
  }
}
