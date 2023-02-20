import { PartialType } from '@nestjs/mapped-types';

import { CreatePaletteDto } from './create-palette.dto';

export class UpdatePaletteDto extends PartialType(CreatePaletteDto) {}
