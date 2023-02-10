import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signinValidationSchema } from "../helpers/signinValidation";

export const useSigninForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });
