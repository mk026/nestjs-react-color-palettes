import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreatePaletteDto {
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  readonly title: string;

  @IsNotEmpty({ each: true })
  readonly colors: string[];
}
