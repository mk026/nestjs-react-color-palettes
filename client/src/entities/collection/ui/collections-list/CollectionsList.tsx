import { Stack } from "@mui/material";
import { FC } from "react";

import { ICollection } from "../../types";
import Collection from "../collection";

interface CollectionsListProps {
  collections: ICollection[];
}

const CollectionsList: FC<CollectionsListProps> = ({ collections }) => {
  return (
    <Stack>
      {collections.map((collection) => (
        <Collection key={collection.id} collection={collection} />
      ))}
    </Stack>
  );
};

export default CollectionsList;
