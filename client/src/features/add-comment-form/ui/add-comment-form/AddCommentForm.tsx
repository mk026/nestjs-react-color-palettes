import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

import { useAddCommentForm } from "../../lib/hooks/useAddCommentForm";
import FormField from "../../../../shared/ui/form-field";
import AddCommentButton from "../add-comment-button";

const AddCommentForm: FC = () => {
  const methods = useAddCommentForm();

  const addCommentHandler = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(addCommentHandler)}>
        <FormField name="content" multiline />
        <AddCommentButton isLoading={false} />
      </Box>
    </FormProvider>
  );
};

export default AddCommentForm;
