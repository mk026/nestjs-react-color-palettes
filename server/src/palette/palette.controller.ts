import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePaletteDto } from './dto/create-palette.dto';

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
  createPalette(@Body() createPaletteDto: CreatePaletteDto) {
    return this.paletteService.createPalette(createPaletteDto);
  }

  @Put(':id')
  updatePalette(@Param('id', ParseIntPipe) id: number) {
    return this.paletteService.updatePalette(id);
  }

  @Delete()
  deletePalette(@Param('id', ParseIntPipe) id: number) {
    return this.paletteService.deletePalette(id);
  }
}
