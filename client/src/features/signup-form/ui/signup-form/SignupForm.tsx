import { FC } from "react";

import { useSignupForm } from "../../lib/hooks/useSignupForm";
import Form from "../../../../shared/ui/form";
import FormField from "../../../../shared/ui/form-field";
import SignupButton from "../signup-button";

const SignupForm: FC = () => {
  const methods = useSignupForm();

  const signupHandler = (values: any) => {
    console.log(values);
  };

  return (
    <Form formMethods={methods} onSubmit={methods.handleSubmit(signupHandler)}>
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
    </Form>
  );
};

export default SignupForm;
