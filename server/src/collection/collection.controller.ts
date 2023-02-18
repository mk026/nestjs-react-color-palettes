import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

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
  @UseGuards(JwtAuthGuard)
  createCollection(@Body() createCollectionDto: CreateCollectionDto) {
    return this.collectionService.createCollection(createCollectionDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateCollection(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionDto: UpdateCollectionDto,
  ) {
    return this.collectionService.updateCollection(id, updateCollectionDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deleteCollection(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.deleteCollection(id);
  }
}
