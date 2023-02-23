import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { addCommentValidationSchema } from "../helpers/addCommentValidation";

export const useAddCommentForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(addCommentValidationSchema),
  });
