import * as yup from "yup";

import {
  PALETTE_TITLE_MAX_LENGTH,
  PALETTE_TITLE_MIN_LENGTH,
} from "../../../../entities/palette";

export const createPaletteValidationSchema = yup.object({
  title: yup
    .string()
    .min(PALETTE_TITLE_MIN_LENGTH)
    .max(PALETTE_TITLE_MAX_LENGTH)
    .required(),
  colors: yup.array().required(),
});
