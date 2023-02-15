import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { createCollectionValidationSchema } from "../helpers/createCollectionValidation";

export const useCreateCollectionForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(createCollectionValidationSchema),
  });
