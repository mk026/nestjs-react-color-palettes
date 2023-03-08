import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class SearchPalettesDto extends PaginationDto {
  @IsOptional()
  readonly title?: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly authorId?: number;
}
