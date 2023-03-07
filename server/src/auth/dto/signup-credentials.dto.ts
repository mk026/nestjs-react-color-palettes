import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignupCredentialsDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly name: string;

  @IsOptional()
  @MinLength(1)
  @MaxLength(10000)
  readonly bio?: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  readonly password: string;
}
