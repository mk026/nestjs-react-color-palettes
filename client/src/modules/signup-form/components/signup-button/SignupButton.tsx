import { FC } from "react";

import LoadingButton from "../../../../components/loading-button";

interface SignupButtonProps {
  isLoading: boolean;
}

const SignupButton: FC<SignupButtonProps> = ({ isLoading }) => {
  return <LoadingButton isLoading={isLoading}>Signup</LoadingButton>;
};

export default SignupButton;
