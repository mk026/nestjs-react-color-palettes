import * as yup from "yup";

export const createPaletteValidationSchema = yup.object({
  title: yup.string().email().required(),
  colors: yup.array().required(),
});
