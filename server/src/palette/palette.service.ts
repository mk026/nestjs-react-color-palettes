import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Palette } from './palette.entity';
import { CreatePaletteDto } from './dto/create-palette.dto';
import { UpdatePaletteDto } from './dto/update-palette.dto';
import { GetPalettesDto } from './dto/get-palettes.dto';
import { SearchPalettesDto } from './dto/search-palettes.dto';
import { AddToFavoritesDto } from '../common/dto/add-to-favorites.dto';

@Injectable()
export class PaletteService {
  constructor(
    @InjectRepository(Palette)
    private readonly paletteRepository: Repository<Palette>,
  ) {}

  getPalettes(getPalettesDto: GetPalettesDto) {
    return this.paletteRepository.find({
      skip: getPalettesDto.skip,
      take: getPalettesDto.take,
    });
  }

  getFavoritePalettes(getPalettesDto: GetPalettesDto, userId: number) {
    return this.paletteRepository.find({
      where: {
        inFavorites: { id: userId },
      },
      skip: getPalettesDto.skip,
      take: getPalettesDto.take,
    });
  }

  async addPaletteToFavorites(
    addToFavoritesDto: AddToFavoritesDto,
    userId: number,
  ) {
    return `Add palette ${addToFavoritesDto.id} to favorites of user ${userId}`;
  }

  searchPalettes(searchPalettesDto: SearchPalettesDto) {
    return this.paletteRepository.find({
      where: {
        title: searchPalettesDto.title,
        author: { id: searchPalettesDto.authorId },
      },
      skip: searchPalettesDto.skip,
      take: searchPalettesDto.take,
    });
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
