import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(1000)
  readonly content: string;
}
