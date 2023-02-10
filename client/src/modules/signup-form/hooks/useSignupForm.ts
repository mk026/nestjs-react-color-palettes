import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signupValidationSchema } from "../helpers/signupValidation";

export const useSignupForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });
