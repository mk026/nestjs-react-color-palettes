import { FC } from "react";

import { useCreatePaletteForm } from "../../lib/hooks/useCreatePaletteForm";
import CreatePaletteButton from "../create-palette-button";
import FormField from "../../../../shared/ui/form-field";
import Form from "../../../../shared/ui/form";

const CreatePaletteForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useCreatePaletteForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Title" name="title" />
      <CreatePaletteButton isLoading={isLoading} />
    </Form>
  );
};

export default CreatePaletteForm;
