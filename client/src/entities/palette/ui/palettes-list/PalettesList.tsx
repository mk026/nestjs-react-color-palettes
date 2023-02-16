import { Stack } from "@mui/material";
import { FC } from "react";

import { IPalette } from "../../types";
import Palette from "../palette/Palette";

interface PalettesListProps {
  palettes: IPalette[];
}

const PalettesList: FC<PalettesListProps> = ({ palettes }) => {
  return (
    <Stack>
      {palettes.map((palette) => (
        <Palette key={palette.id} palette={palette} />
      ))}
    </Stack>
  );
};

export default PalettesList;
