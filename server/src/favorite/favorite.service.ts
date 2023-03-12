import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteService {
  getFavorites() {
    return 'Get favorites';
  }

  async addFavorite() {
    return 'Add favorite';
  }

  async deleteFavorite(id: number) {
    return `Delete favorite with id ${id}`;
  }
}
