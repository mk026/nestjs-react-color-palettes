import { IsNotEmpty } from 'class-validator';

import { PaginationDto } from '../../common/dto/pagination.dto';

export class SearchCollectionsDto extends PaginationDto {
  @IsNotEmpty()
  readonly title: string;
}
