import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class GetCommentsDto extends PaginationDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  readonly paletteId?: number;
}
