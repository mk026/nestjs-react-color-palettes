import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signup(signupCredentialsDto: SignupCredentialsDto) {
    const user = await this.userService.createUser(signupCredentialsDto);
    const accessToken = this.signToken(user.id);
    return {
      user: { name: user.name, email: user.email },
      accessToken,
    };
  }

  signin(signinCredentialsDto: SigninCredentialsDto) {
    return 'Signin';
  }

  signToken(userId: number) {
    const payload: JwtPayload = { userId };
    return this.jwtService.sign(payload);
  }
}
