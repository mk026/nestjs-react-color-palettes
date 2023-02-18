import { Injectable } from '@nestjs/common';

import { GetCommentsDto } from './dto/get-comments.dto';

@Injectable()
export class CommentService {
  getComments(getCommentsDto: GetCommentsDto) {
    return `Return all comments for post with id ${getCommentsDto.postId}`;
  }

  getComment(id: number) {
    return `Return comment with id ${id}`;
  }

  createComment() {
    return 'Create new comment';
  }

  updateComment(id: number) {
    return `Update comment with id ${id}`;
  }

  deleteComment(id: number) {
    return `Delete comment with id ${id}`;
  }
}
