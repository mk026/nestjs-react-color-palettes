import { FC } from "react";

import { useUpdatePaletteForm } from "../../lib/hooks/useUpdatePaletteForm";
import Form from "../../../../shared/ui/form";
import FormField from "../../../../shared/ui/form-field";
import UpdatePaletteButton from "../update-palette-button";

const UpdatePaletteForm: FC = () => {
  const methods = useUpdatePaletteForm();

  const updatePaletteHandler = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(updatePaletteHandler)}
    >
      <FormField label="Title" name="title" />
      <UpdatePaletteButton isLoading={false} />
    </Form>
  );
};

export default UpdatePaletteForm;
