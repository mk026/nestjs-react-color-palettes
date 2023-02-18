import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  getComments(postId: number) {
    return `Return all comments for post with id ${postId}`;
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
