import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";

import { createPaletteValidationSchema } from "../helpers/createPaletteValidation";
import { createPaletteRequest } from "../../api/createPaletteRequest";

export const useCreatePaletteForm = () => {
  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(createPaletteValidationSchema),
  });
  const mutation = useMutation({ mutationFn: createPaletteRequest });
  const createPaletteHandler = useCallback((values: any) => {
    mutation.mutate(values);
  }, []);

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(createPaletteHandler),
    ...mutation,
  };
};
