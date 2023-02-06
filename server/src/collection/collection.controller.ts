import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { CollectionService } from './collection.service';

@Controller('collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  getCollections() {
    return this.collectionService.getCollections();
  }

  @Get(':id')
  getCollection(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.getCollection(id);
  }

  @Post()
  createCollection() {
    return this.collectionService.createCollection();
  }

  @Put(':id')
  updateCollection(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.updateCollection(id);
  }

  @Delete()
  deleteCollection(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.deleteCollection(id);
  }
}
