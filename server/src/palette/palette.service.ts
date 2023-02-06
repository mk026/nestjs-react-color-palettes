import { Injectable } from '@nestjs/common';

import { CreatePaletteDto } from './dto/create-palette.dto';

@Injectable()
export class PaletteService {
  getPalettes() {
    return 'Return all palettes';
  }

  getPalette(id: number) {
    return `Return palette with id ${id}`;
  }

  createPalette(createPaletteDto: CreatePaletteDto) {
    return 'Create new palette';
  }

  updatePalette(id: number) {
    return `Update palette with id ${id}`;
  }

  deletePalette(id: number) {
    return `Delete palette with id ${id}`;
  }
}