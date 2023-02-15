import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

import FormField from "../../../../shared/ui/form-field";
import SigninButton from "../signin-button";
import { useSigninForm } from "../../lib/hooks/useSigninForm";

const SigninForm: FC = () => {
  const methods = useSigninForm();

  const signinHandler = (values: any) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signinHandler)}>
        <FormField label="Email" name="email" type="email" />
        <FormField label="Password" name="password" type="password" />
        <SigninButton isLoading={false} />
      </Box>
    </FormProvider>
  );
};

export default SigninForm;
