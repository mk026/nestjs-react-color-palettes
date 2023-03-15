import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Collection } from './collection.entity';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { GetCollectionsDto } from './dto/get-collections.dto';
import { SearchCollectionsDto } from './dto/search-collections.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection>,
  ) {}

  getCollections(getCollectionsDto: GetCollectionsDto) {
    return this.collectionRepository.find({
      skip: getCollectionsDto.skip,
      take: getCollectionsDto.take,
    });
  }

  getFavoriteCollections(getCollectionsDto: GetCollectionsDto, userId: number) {
    return this.collectionRepository.find({
      where: {
        inFavorites: { id: userId },
      },
      skip: getCollectionsDto.skip,
      take: getCollectionsDto.take,
    });
  }

  searchCollections(searchCollectionsDto: SearchCollectionsDto) {
    return this.collectionRepository.find({
      where: {
        title: searchCollectionsDto.title,
        author: { id: searchCollectionsDto.authorId },
      },
      skip: searchCollectionsDto.skip,
      take: searchCollectionsDto.take,
    });
  }

  getCollection(id: number) {
    return this.collectionRepository.find({ where: { id } });
  }

  async createCollection(
    createCollectionDto: CreateCollectionDto,
    userId: number,
  ) {
    const collection = this.collectionRepository.create({
      title: createCollectionDto.title,
      description: createCollectionDto.description,
      author: { id: userId },
    });
    await this.collectionRepository.save(collection);
  }

  async addCollectionToFavorites(id: number, userId: number) {
    return `Add collection ${id} to favorites of user ${userId}`;
  }

  async updateCollection(
    id: number,
    updateCollectionDto: UpdateCollectionDto,
    userId: number,
  ) {
    const result = await this.collectionRepository.update(
      { id, author: { id: userId } },
      updateCollectionDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Collection with id ${id} not found`);
    }
  }

  async deleteCollection(id: number, userId: number) {
    const result = await this.collectionRepository.delete({
      id,
      author: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Collection with id ${id} not found`);
    }
  }
}
