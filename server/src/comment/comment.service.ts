import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetCommentsDto } from './dto/get-comments.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  getComments(getCommentsDto: GetCommentsDto) {
    return this.commentRepository.find({
      where: {
        palette: { id: getCommentsDto.paletteId },
      },
    });
  }

  getComment(id: number) {
    return this.commentRepository.findOne({ where: { id } });
  }

  async createComment(createCommentDto: CreateCommentDto, userId: number) {
    const comment = this.commentRepository.create({
      palette: { id: createCommentDto.paletteId },
      content: createCommentDto.content,
      author: { id: userId },
    });
    await this.commentRepository.save(comment);
  }

  async updateComment(
    id: number,
    updateCommentDto: UpdateCommentDto,
    userId: number,
  ) {
    const result = await this.commentRepository.update(
      { id, author: { id: userId } },
      updateCommentDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  }

  async deleteComment(id: number, userId: number) {
    const result = await this.commentRepository.delete({
      id,
      author: { id: userId },
    });
    if (result.affected === 0) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
  }
}
