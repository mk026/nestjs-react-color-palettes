import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { updateCommentValidationSchema } from "../helpers/updateCommentValidation";

export const useUpdateCommentForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(updateCommentValidationSchema),
  });
