import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { FavoriteService } from './favorite.service';

@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Get()
  getFavorites() {
    return this.favoriteService.getFavorites();
  }

  @Post()
  addFavorite() {
    return this.favoriteService.addFavorite();
  }

  @Delete(':id')
  deleteFavorite(@Param('id', ParseIntPipe) id: number) {
    return this.favoriteService.deleteFavorite(id);
  }
}
