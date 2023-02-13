import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

import { useCreatePaletteForm } from "../../hooks/useCreatePaletteForm";
import CreatePaletteButton from "../create-palette-button";
import FormField from "../../../../components/form-field";

const CreatePaletteForm: FC = () => {
  const methods = useCreatePaletteForm();

  const createPaletteHandler = (values: any) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(createPaletteHandler)}
      >
        <FormField label="Title" name="title" />
        <CreatePaletteButton isLoading={false} />
      </Box>
    </FormProvider>
  );
};

export default CreatePaletteForm;
