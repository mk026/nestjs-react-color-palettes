import { Box } from "@mui/material";
import { FC } from "react";
import { FormProvider } from "react-hook-form";

import { useUpdatePaletteForm } from "../../lib/hooks/useUpdatePaletteForm";
import FormField from "../../../../shared/ui/form-field";
import UpdatePaletteButton from "../update-palette-button";

const UpdatePaletteForm: FC = () => {
  const methods = useUpdatePaletteForm();

  const updatePaletteHandler = (values: any) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(updatePaletteHandler)}
      >
        <FormField label="Title" name="title" />
        <UpdatePaletteButton isLoading={false} />
      </Box>
    </FormProvider>
  );
};

export default UpdatePaletteForm;
