import { FC } from "react";

import LoadingButton from "../../../../shared/ui/loading-button";

interface UpdateCommentButtonProps {
  isLoading: boolean;
}

const UpdateCommentButton: FC<UpdateCommentButtonProps> = ({ isLoading }) => {
  return <LoadingButton isLoading={isLoading}>Save Comment</LoadingButton>;
};

export default UpdateCommentButton;
