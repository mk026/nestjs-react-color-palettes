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
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { GetCollectionsDto } from './dto/get-collections.dto';
import { SearchCollectionsDto } from './dto/search-collections.dto';
import { AddToFavoritesDto } from '../common/dto/add-to-favorites.dto';

@Controller('collections')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  getCollections(@Query() getCollectionsDto: GetCollectionsDto) {
    return this.collectionService.getCollections(getCollectionsDto);
  }

  @Get('favorites')
  @UseGuards(JwtAuthGuard)
  getFavoriteCollections(
    @Query() getCollectionsDto: GetCollectionsDto,
    @AuthUser() userId: number,
  ) {
    return this.collectionService.getFavoriteCollections(
      getCollectionsDto,
      userId,
    );
  }

  @Post('favorites')
  @UseGuards(JwtAuthGuard)
  addCollectionToFavorites(
    @Body() addToFavoritesDto: AddToFavoritesDto,
    @AuthUser() userId: number,
  ) {
    return this.collectionService.addCollectionToFavorites(
      addToFavoritesDto,
      userId,
    );
  }

  @Get('search')
  searchCollections(@Query() searchCollectionsDto: SearchCollectionsDto) {
    return this.collectionService.searchCollections(searchCollectionsDto);
  }

  @Get(':id')
  getCollection(@Param('id', ParseIntPipe) id: number) {
    return this.collectionService.getCollection(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createCollection(
    @Body() createCollectionDto: CreateCollectionDto,
    @AuthUser() userId: number,
  ) {
    return this.collectionService.createCollection(createCollectionDto, userId);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateCollection(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCollectionDto: UpdateCollectionDto,
    @AuthUser() userId: number,
  ) {
    return this.collectionService.updateCollection(
      id,
      updateCollectionDto,
      userId,
    );
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteCollection(
    @Param('id', ParseIntPipe) id: number,
    @AuthUser() userId: number,
  ) {
    return this.collectionService.deleteCollection(id, userId);
  }
}
