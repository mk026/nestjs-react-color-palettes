import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

import { useCreatePaletteForm } from "../../lib/hooks/useCreatePaletteForm";
import CreatePaletteButton from "../create-palette-button";
import FormField from "../../../../shared/ui/form-field";

const CreatePaletteForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useCreatePaletteForm();

  return (
    <FormProvider {...formMethods}>
      <Box component="form" onSubmit={onSubmit}>
        <FormField label="Title" name="title" />
        <CreatePaletteButton isLoading={isLoading} />
      </Box>
    </FormProvider>
  );
};

export default CreatePaletteForm;
