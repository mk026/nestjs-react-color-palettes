import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IPalette } from "../../types";

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
