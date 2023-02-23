import { Box } from "@mui/material";
import { FC } from "react";
import { FormProvider } from "react-hook-form";

import { useUpdateCommentForm } from "../../lib/hooks/useUpdateCommentForm";
import FormField from "../../../../shared/ui/form-field";
import UpdateCommentButton from "../update-comment-button";

const UpdateCommentForm: FC = () => {
  const methods = useUpdateCommentForm();

  const updateCommentHandler = (values: any) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(updateCommentHandler)}
      >
        <FormField name="content" multiline />
        <UpdateCommentButton isLoading={false} />
      </Box>
    </FormProvider>
  );
};

export default UpdateCommentForm;
