import * as yup from "yup";

export const addCommentValidationSchema = yup.object({
  content: yup.string().required(),
});
