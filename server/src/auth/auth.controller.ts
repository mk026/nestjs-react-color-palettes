import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SigninCredentialsDto } from './dto/signin-credentials.dto';
import { SignupCredentialsDto } from './dto/signup-credentials.dto';
import { AuthResponse } from './interfaces/auth-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(
    @Body() signupCredentialsDto: SignupCredentialsDto,
  ): Promise<AuthResponse> {
    return this.authService.signup(signupCredentialsDto);
  }

  @Post('signin')
  signin(
    @Body() signinCredentialsDto: SigninCredentialsDto,
  ): Promise<AuthResponse> {
    return this.authService.signin(signinCredentialsDto);
  }
}
