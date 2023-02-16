import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { ICollection } from "../../types";

interface CollectionProps {
  collection: ICollection;
}

const Collection: FC<CollectionProps> = ({ collection }) => {
  return (
    <Card>
      <Typography>{collection.title}</Typography>
    </Card>
  );
};

export default Collection;
