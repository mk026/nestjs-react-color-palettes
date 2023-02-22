import * as yup from "yup";

export const updatePaletteValidationSchema = yup.object({
  title: yup.string().email().optional(),
  colors: yup.array().optional(),
});
