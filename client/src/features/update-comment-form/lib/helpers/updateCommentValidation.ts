import * as yup from "yup";

export const updateCommentValidationSchema = yup.object({
  content: yup.string().required(),
});
