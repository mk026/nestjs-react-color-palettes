import { FC } from "react";

import LoadingButton from "../../../../shared/ui/loading-button";

interface AddCommentButtonProps {
  isLoading: boolean;
}

const AddCommentButton: FC<AddCommentButtonProps> = ({ isLoading }) => {
  return <LoadingButton isLoading={isLoading}>Add comment</LoadingButton>;
};

export default AddCommentButton;
