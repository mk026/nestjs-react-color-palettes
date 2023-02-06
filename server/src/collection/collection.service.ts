import { Injectable } from '@nestjs/common';

import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  getCollections() {
    return 'Return all collections';
  }

  getCollection(id: number) {
    return `Return collection with id ${id}`;
  }

  createCollection(createCollectionDto: CreateCollectionDto) {
    return 'Create new collection';
  }

  updateCollection(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `Update collection with id ${id}`;
  }

  deleteCollection(id: number) {
    return `Delete collection with id ${id}`;
  }
}
