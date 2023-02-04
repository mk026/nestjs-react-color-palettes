import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'Return all users';
  }

  getUser(id: number) {
    return `Return user with id ${id}`;
  }

  createUser() {
    return 'Create new user';
  }

  updateUser(id: number) {
    return `Update user with id ${id}`;
  }

  deleteUser(id: number) {
    return `Delete user with id ${id}`;
  }
}
