import { OmitType, PartialType } from '@nestjs/mapped-types';

import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends OmitType(PartialType(CreateCommentDto), [
  'paletteId',
] as const) {}
