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

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
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
  @UseGuards(JwtAuthGuard)
  createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.updateComment(id);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deleteComment(@Param('id', ParseIntPipe) id: number) {
    return this.commentService.deleteComment(id);
  }
}
