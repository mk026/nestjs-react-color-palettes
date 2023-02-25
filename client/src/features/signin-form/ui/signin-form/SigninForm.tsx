import { FC } from "react";

import { useSigninForm } from "../../lib/hooks/useSigninForm";
import Form from "../../../../shared/ui/form";
import FormField from "../../../../shared/ui/form-field";
import SigninButton from "../signin-button";

const SigninForm: FC = () => {
  const methods = useSigninForm();

  const signinHandler = (values: any) => {
    console.log(values);
  };

  return (
    <Form formMethods={methods} onSubmit={methods.handleSubmit(signinHandler)}>
      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />
      <SigninButton isLoading={false} />
    </Form>
  );
};

export default SigninForm;
