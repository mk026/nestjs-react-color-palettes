import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { AuthUser } from '../common/decorators/auth-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserService } from './user.service';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query() getUsersDto: GetUsersDto) {
    return this.userService.getUsers(getUsersDto);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  updateUser(@Body() updateUserDto: UpdateUserDto, @AuthUser() userId: number) {
    return this.userService.updateUser(updateUserDto, userId);
  }

  @Put('password')
  @UseGuards(JwtAuthGuard)
  updatePassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
    @AuthUser() userId: number,
  ) {
    return this.userService.updatePassword(updatePasswordDto, userId);
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  deleteUser(@AuthUser() userId: number) {
    return this.userService.deleteUser(userId);
  }
}
