import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find();
  }

  getUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepository.create({
      name: createUserDto.name,
      bio: createUserDto.bio,
      email: createUserDto.email,
    });
    await this.userRepository.save(user);
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
