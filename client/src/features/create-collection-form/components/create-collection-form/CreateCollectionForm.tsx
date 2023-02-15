import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

import { useCreateCollectionForm } from "../../lib/hooks/useCreateCollectionForm";
import CreateCollectionButton from "../create-collection-button";
import FormField from "../../../../shared/ui/form-field";

const CreateCollectionForm: FC = () => {
  const methods = useCreateCollectionForm();

  const createCollectionHandler = (values: any) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(createCollectionHandler)}
      >
        <FormField label="Title" name="title" />
        <CreateCollectionButton isLoading={false} />
      </Box>
    </FormProvider>
  );
};

export default CreateCollectionForm;
