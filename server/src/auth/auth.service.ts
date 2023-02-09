import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  signup(signupCredentialsDto: SignupCredentialsDto) {
    return 'Signup';
  }

  signin(signinCredentialsDto: SigninCredentialsDto) {
    return 'Signin';
  }

  signToken(userId: number) {
    const payload = { userId };
    return this.jwtService.sign(payload);
  }
}
