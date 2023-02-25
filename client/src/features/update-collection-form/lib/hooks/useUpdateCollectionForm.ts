import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { updateCollectionValidationSchema } from "../helpers/updateCollectionValidation";

export const useUpdateCollectionForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(updateCollectionValidationSchema),
  });
