import { FC } from "react";

import LoadingButton from "../../../../shared/ui/loading-button";

interface CreatePaletteButtonProps {
  isLoading: boolean;
}

const CreatePaletteButton: FC<CreatePaletteButtonProps> = ({ isLoading }) => {
  return <LoadingButton isLoading={isLoading}>Create Palette</LoadingButton>;
};

export default CreatePaletteButton;
