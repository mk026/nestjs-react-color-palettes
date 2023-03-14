import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { SearchUsersDto } from './dto/search-users.dto';
import { Hash } from '../common/utils/hash.util';

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
    return this.userRepository.find({
      where: { name: searchUsersDto.name },
      skip: searchUsersDto.skip,
      take: searchUsersDto.take,
    });
  }

  getUser(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  getUserByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  async createUser(createUserDto: CreateUserDto) {
    const foundUser = await this.getUserByEmail(createUserDto.email);
    if (foundUser) {
      throw new ConflictException('Email already in use');
    }
    const passwordHash = Hash.generateHash(createUserDto.password);
    const user = this.userRepository.create({
      name: createUserDto.name,
      bio: createUserDto.bio,
      email: createUserDto.email,
      password: passwordHash,
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
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
    const { oldPassword, newPassword } = updatePasswordDto;
    const isPasswordValid = Hash.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const newPasswordHash = Hash.generateHash(newPassword);
    user.password = newPasswordHash;
    await this.userRepository.save(user);
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
