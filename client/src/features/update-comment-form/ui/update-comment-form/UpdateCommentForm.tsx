import { FC } from "react";

import { useUpdateCommentForm } from "../../lib/hooks/useUpdateCommentForm";
import Form from "../../../../shared/ui/form";
import FormField from "../../../../shared/ui/form-field";
import UpdateCommentButton from "../update-comment-button";

const UpdateCommentForm: FC = () => {
  const methods = useUpdateCommentForm();

  const updateCommentHandler = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(updateCommentHandler)}
    >
      <FormField name="content" multiline />
      <UpdateCommentButton isLoading={false} />
    </Form>
  );
};

export default UpdateCommentForm;
