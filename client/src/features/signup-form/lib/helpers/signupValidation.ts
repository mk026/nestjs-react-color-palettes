import * as yup from "yup";

export const signupValidationSchema = yup.object({
  name: yup.string().min(1).max(100).required(),
  bio: yup.string().min(1).max(1000).optional(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(100).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
