import { FC } from "react";

import LoadingButton from "../../../../components/loading-button";

interface CreateCollectionButtonProps {
  isLoading: boolean;
}

const CreateCollectionButton: FC<CreateCollectionButtonProps> = ({
  isLoading,
}) => {
  return <LoadingButton isLoading={isLoading}>Create Collection</LoadingButton>;
};

export default CreateCollectionButton;
