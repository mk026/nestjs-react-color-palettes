import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import { signupValidationSchema } from "../../helpers/signupValidation";
import FormField from "../../../../components/form-field";
import LoadingButton from "../../../../components/loading-button";

const SignupForm: FC = () => {
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

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
