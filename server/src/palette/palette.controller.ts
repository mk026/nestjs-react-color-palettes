import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { AuthUser } from '../common/decorators/auth-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePaletteDto } from './dto/create-palette.dto';
import { UpdatePaletteDto } from './dto/update-palette.dto';
import { PaletteService } from './palette.service';
import { GetPalettesDto } from './dto/get-palettes.dto';
import { SearchPalettesDto } from './dto/search-palettes.dto';

@Controller('palettes')
export class PaletteController {
  constructor(private readonly paletteService: PaletteService) {}

  @Get()
  getPalettes(@Query() getPalettesDto: GetPalettesDto) {
    return this.paletteService.getPalettes(getPalettesDto);
  }

  @Get('search')
  searchPalettes(@Query() searchPalettesDto: SearchPalettesDto) {
    return this.paletteService.searchPalettes(searchPalettesDto);
  }

  @Get(':id')
  getPalette(@Param('id', ParseIntPipe) id: number) {
    return this.paletteService.getPalette(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createPalette(
    @Body() createPaletteDto: CreatePaletteDto,
    @AuthUser() userId: number,
  ) {
    return this.paletteService.createPalette(createPaletteDto, userId);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updatePalette(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePaletteDto: UpdatePaletteDto,
    @AuthUser() userId: number,
  ) {
    return this.paletteService.updatePalette(id, updatePaletteDto, userId);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deletePalette(
    @Param('id', ParseIntPipe) id: number,
    @AuthUser() userId: number,
  ) {
    return this.paletteService.deletePalette(id, userId);
  }
}
