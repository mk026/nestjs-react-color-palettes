import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

import FormField from "../../../../components/form-field";
import LoadingButton from "../../../../components/loading-button";
import { useSignupForm } from "../../hooks/useSignupForm";

const SignupForm: FC = () => {
  const methods = useSignupForm();

  const signupHandler = (values: any) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signupHandler)}>
        <FormField label="Name" name="name" />
        <FormField label="About yourself" name="bio" multiline />
        <FormField label="Email" name="email" type="email" />
        <FormField label="Password" name="password" type="password" />
        <FormField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <LoadingButton isLoading={false}>Signup</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default SignupForm;
