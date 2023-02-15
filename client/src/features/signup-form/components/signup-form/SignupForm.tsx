import { FC } from "react";
import { FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

import FormField from "../../../../shared/ui/form-field";
import SignupButton from "../signup-button";
import { useSignupForm } from "../../lib/hooks/useSignupForm";

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
        <SignupButton isLoading={false} />
      </Box>
    </FormProvider>
  );
};

export default SignupForm;
