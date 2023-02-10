import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import { signinValidationSchema } from "../../helpers/signinValidation";
import FormField from "../../../../components/form-field";
import LoadingButton from "../../../../components/loading-button";

const SigninForm: FC = () => {
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  const signinHandler = (values: any) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signinHandler)}>
        <FormField label="Email" name="email" type="email" />
        <FormField label="Password" name="password" type="password" />
        <LoadingButton isLoading={false}>Signin</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default SigninForm;
