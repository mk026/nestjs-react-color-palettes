import { FC } from "react";

import LoadingButton from "../../../../shared/ui/loading-button";

interface SigninButtonProps {
  isLoading: boolean;
}

const SigninButton: FC<SigninButtonProps> = ({ isLoading }) => {
  return <LoadingButton isLoading={isLoading}>Signin</LoadingButton>;
};

export default SigninButton;
