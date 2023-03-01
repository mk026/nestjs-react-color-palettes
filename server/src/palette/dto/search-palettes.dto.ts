import { IsNotEmpty } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class SearchPalettesDto extends PaginationDto {
  @IsNotEmpty()
  readonly title: string;
}
