import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  getUsers() {
    return 'Return all users';
  }

  getUser(id: number) {
    return `Return user with id ${id}`;
  }

  createUser(createUserDto: CreateUserDto) {
    return 'Create new user';
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return `Update user`;
  }

  updatePassword(updatePasswordDto: UpdatePasswordDto) {
    return `Update password`;
  }

  deleteUser(id: number) {
    return `Delete user with id ${id}`;
  }
}
