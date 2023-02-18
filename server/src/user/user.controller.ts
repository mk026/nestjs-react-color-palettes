import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(updateUserDto);
  }

  @Put('password')
  @UseGuards(JwtAuthGuard)
  updatePassword(@Body() updatePasswordDto: UpdatePasswordDto) {
    return this.userService.updatePassword(updatePasswordDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
}
