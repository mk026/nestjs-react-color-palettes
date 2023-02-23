import { FC } from "react";

import LoadingButton from "../../../../shared/ui/loading-button";

interface UpdatePaletteButtonProps {
  isLoading: boolean;
}

const UpdatePaletteButton: FC<UpdatePaletteButtonProps> = ({ isLoading }) => {
  return <LoadingButton isLoading={isLoading}>Save Comment</LoadingButton>;
};

export default UpdatePaletteButton;
