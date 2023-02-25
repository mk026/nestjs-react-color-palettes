import { FC } from "react";

import { useCreateCollectionForm } from "../../lib/hooks/useCreateCollectionForm";
import CreateCollectionButton from "../create-collection-button";
import FormField from "../../../../shared/ui/form-field";
import Form from "../../../../shared/ui/form";

const CreateCollectionForm: FC = () => {
  const methods = useCreateCollectionForm();

  const createCollectionHandler = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(createCollectionHandler)}
    >
      <FormField label="Title" name="title" />
      <FormField label="Description" name="description" multiline />
      <CreateCollectionButton isLoading={false} />
    </Form>
  );
};

export default CreateCollectionForm;
