import { Injectable } from '@nestjs/common';

@Injectable()
export class CollectionService {
  getCollections() {
    return 'Return all collections';
  }

  getCollection(id: number) {
    return `Return collection with id ${id}`;
  }

  createCollection() {
    return 'Create new collection';
  }

  updateCollection(id: number) {
    return `Update collection with id ${id}`;
  }

  deleteCollection(id: number) {
    return `Delete collection with id ${id}`;
  }
}
