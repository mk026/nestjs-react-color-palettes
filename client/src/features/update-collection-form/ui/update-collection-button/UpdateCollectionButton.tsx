import { FC } from "react";

import LoadingButton from "../../../../shared/ui/loading-button";

interface UpdateCollectionButtonProps {
  isLoading: boolean;
}

const UpdateCollectionButton: FC<UpdateCollectionButtonProps> = ({
  isLoading,
}) => {
  return <LoadingButton isLoading={isLoading}>Save</LoadingButton>;
};

export default UpdateCollectionButton;
