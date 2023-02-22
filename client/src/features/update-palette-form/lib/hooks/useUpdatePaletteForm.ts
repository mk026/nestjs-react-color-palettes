import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { updatePaletteValidationSchema } from "../helpers/updatePaletteValidation";

export const useUpdatePaletteForm = () =>
  useForm({
    mode: "onBlur",
    resolver: yupResolver(updatePaletteValidationSchema),
  });
