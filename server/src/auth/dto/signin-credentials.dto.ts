import { OmitType } from '@nestjs/mapped-types';
import { SignupCredentialsDto } from './signup-credentials.dto';

export class SigninCredentialsDto extends OmitType(SignupCredentialsDto, [
  'password',
] as const) {}
