import { FC } from "react";

import { useAddCommentForm } from "../../lib/hooks/useAddCommentForm";
import Form from "../../../../shared/ui/form";
import FormField from "../../../../shared/ui/form-field";
import AddCommentButton from "../add-comment-button";

const AddCommentForm: FC = () => {
  const methods = useAddCommentForm();

  const addCommentHandler = (data: any) => console.log(data);

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(addCommentHandler)}
    >
      <FormField name="content" multiline />
      <AddCommentButton isLoading={false} />
    </Form>
  );
};

export default AddCommentForm;
