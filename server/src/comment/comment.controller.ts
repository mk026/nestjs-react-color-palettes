import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { GetCommentsDto } from './dto/get-comments.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getComments(@Query() getCommentsDto: GetCommentsDto) {
    return this.commentService.getComments(getCommentsDto);
  }

  @Get(':id')
  getComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.getComment(id);
  }

  @Post()
  createComment() {
    return this.commentService.createComment();
  }

  @Put(':id')
  updateComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.updateComment(id);
  }

  @Delete()
  deleteComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.deleteComment(id);
  }
}
