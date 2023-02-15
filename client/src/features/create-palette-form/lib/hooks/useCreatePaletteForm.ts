import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { createPaletteValidationSchema } from "../helpers/createPaletteValidation";

export const useCreatePaletteForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(createPaletteValidationSchema),
  });
