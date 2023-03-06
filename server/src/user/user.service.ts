import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { SearchUsersDto } from './dto/search-users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers(getUsersDto: GetUsersDto) {
    return this.userRepository.find({
      skip: getUsersDto.skip,
      take: getUsersDto.take,
    });
  }

  searchUsers(searchUsersDto: SearchUsersDto) {
    return 'Search users';
  }

  getUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create({
      name: createUserDto.name,
      bio: createUserDto.bio,
      email: createUserDto.email,
    });
    return this.userRepository.save(user);
  }

  async updateUser(updateUserDto: UpdateUserDto, userId: number) {
    const result = await this.userRepository.update(userId, updateUserDto);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
  }

  async updatePassword(updatePasswordDto: UpdatePasswordDto, userId: number) {
    return `Update password for user with id ${userId}`;
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
