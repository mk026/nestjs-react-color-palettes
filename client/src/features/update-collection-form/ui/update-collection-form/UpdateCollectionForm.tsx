import { FC } from "react";

import { useUpdateCollectionForm } from "../../lib/hooks/useUpdateCollectionForm";
import Form from "../../../../shared/ui/form";
import FormField from "../../../../shared/ui/form-field";
import UpdateCollectionButton from "../update-collection-button";

const UpdateCollectionForm: FC = () => {
  const methods = useUpdateCollectionForm();

  const updateCollectionHandler = (values: any) => {
    console.log(values);
  };
  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(updateCollectionHandler)}
    >
      <FormField label="Title" name="title" />
      <UpdateCollectionButton isLoading={false} />
    </Form>
  );
};

export default UpdateCollectionForm;
