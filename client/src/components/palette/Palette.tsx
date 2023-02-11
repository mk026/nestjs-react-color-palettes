import { Card, Typography } from "@mui/material";
import { FC } from "react";

import { IPalette } from "../../types/palette";

interface PaletteProps {
  palette: IPalette;
}

const Palette: FC<PaletteProps> = ({ palette }) => {
  return (
    <Card>
      <Typography>{palette.title}</Typography>
    </Card>
  );
};

export default Palette;
