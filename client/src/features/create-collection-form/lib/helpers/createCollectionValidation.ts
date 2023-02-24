import * as yup from "yup";

import {
  COLLECTION_DESCRIPTION_MAX_LENGTH,
  COLLECTION_DESCRIPTION_MIN_LENGTH,
  COLLECTION_TITLE_MAX_LENGTH,
  COLLECTION_TITLE_MIN_LENGTH,
} from "../../../../entities/collection";

export const createCollectionValidationSchema = yup.object({
  title: yup
    .string()
    .min(COLLECTION_TITLE_MIN_LENGTH)
    .max(COLLECTION_TITLE_MAX_LENGTH)
    .email()
    .required(),
  description: yup
    .array()
    .min(COLLECTION_DESCRIPTION_MIN_LENGTH)
    .max(COLLECTION_DESCRIPTION_MAX_LENGTH)
    .optional(),
});
