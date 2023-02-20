import { Injectable } from '@nestjs/common';

import { CreateCommentDto } from './dto/create-comment.dto';
import { GetCommentsDto } from './dto/get-comments.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  getComments(getCommentsDto: GetCommentsDto) {
    return `Return all comments for post with id ${getCommentsDto.postId}`;
  }

  getComment(id: number) {
    return `Return comment with id ${id}`;
  }

  createComment(createCommentDto: CreateCommentDto, userId: number) {
    return `Create new comment ${createCommentDto.content}`;
  }

  updateComment(
    id: number,
    updateCommentDto: UpdateCommentDto,
    userId: number,
  ) {
    return `Update comment with id ${id} ${updateCommentDto.content}`;
  }

  deleteComment(id: number, userId: number) {
    return `Delete comment with id ${id}`;
  }
}
