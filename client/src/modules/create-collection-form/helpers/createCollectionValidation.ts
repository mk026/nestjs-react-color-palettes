import * as yup from "yup";

export const createCollectionValidationSchema = yup.object({
  title: yup.string().email().required(),
  description: yup.array().optional(),
});
