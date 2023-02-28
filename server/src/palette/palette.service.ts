import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Palette } from './palette.entity';
import { CreatePaletteDto } from './dto/create-palette.dto';
import { UpdatePaletteDto } from './dto/update-palette.dto';

@Injectable()
export class PaletteService {
  constructor(
    @InjectRepository(Palette)
    private readonly paletteRepository: Repository<Palette>,
  ) {}

  getPalettes() {
    return this.paletteRepository.find();
  }

  getPalette(id: number) {
    return this.paletteRepository.findOne({ where: { id } });
  }

  async createPalette(createPaletteDto: CreatePaletteDto, userId: number) {
    const palette = this.paletteRepository.create({
      title: createPaletteDto.title,
      colors: createPaletteDto.colors,
      author: { id: userId },
    });
    await this.paletteRepository.save(palette);
  }

  async updatePalette(
    id: number,
    updatePaletteDto: UpdatePaletteDto,
    userId: number,
  ) {
    const result = await this.paletteRepository.update(
      { id, author: { id: userId } },
      updatePaletteDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Palette with id ${id} not found`);
    }
  }

  async deletePalette(id: number, userId: number) {
    const result = await this.paletteRepository.delete({
      id,
      author: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Palette with id ${id} not found`);
    }
  }
}
