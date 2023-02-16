import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../../../../pages/home-page";
import CollectionPage from "../../../../pages/collection-page";
import CollectionsPage from "../../../../pages/collections-page";
import PalettePage from "../../../../pages/palette-page";
import PalettesPage from "../../../../pages/palettes-page";
import ProfilePage from "../../../../pages/profile-page";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/collections/:id" element={<CollectionPage />} />
      <Route path="/palettes" element={<PalettesPage />} />
      <Route path="/palettes/:id" element={<PalettePage />} />
      <Route path="/users/:id" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRouter;
