import * as yup from "yup";

import {
  USER_BIO_MAX_LENGTH,
  USER_BIO_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  USER_NAME_MIN_LENGTH,
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
} from "../../../../entities/user";

export const signupValidationSchema = yup.object({
  name: yup
    .string()
    .min(USER_NAME_MIN_LENGTH)
    .max(USER_NAME_MAX_LENGTH)
    .required(),
  bio: yup
    .string()
    .min(USER_BIO_MIN_LENGTH)
    .max(USER_BIO_MAX_LENGTH)
    .optional(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(USER_PASSWORD_MIN_LENGTH)
    .max(USER_PASSWORD_MAX_LENGTH)
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
