import { IsInt, IsNotEmpty } from 'class-validator';

export class AddToFavoritesDto {
  @IsNotEmpty()
  @IsInt()
  readonly id: number;
}
