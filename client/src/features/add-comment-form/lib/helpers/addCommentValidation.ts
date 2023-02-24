import * as yup from "yup";

import {
  COMMENT_CONTENT_MAX_LENGTH,
  COMMENT_CONTENT_MIN_LENGTH,
} from "../../../../entities/comment";

export const addCommentValidationSchema = yup.object({
  content: yup
    .string()
    .min(COMMENT_CONTENT_MIN_LENGTH)
    .max(COMMENT_CONTENT_MAX_LENGTH)
    .required(),
});
