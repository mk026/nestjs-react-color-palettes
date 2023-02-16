import { ComponentType } from "react";

import HomePage from "../../pages/home-page";
import PalettesPage from "../../pages/palettes-page";
import PalettePage from "../../pages/palette-page";
import CollectionsPage from "../../pages/collections-page";
import CollectionPage from "../../pages/collection-page";
import ProfilePage from "../../pages/profile-page";

export enum Paths {
  HOME = "/",
  PALETTES = "/palettes",
  PALETTE = "/palettes/:id",
  COLLECTIONS = "/collections",
  COLLECTION = "/collections/:id",
  PROFILE = "/profiles/:id",
}

export interface IRoute {
  path: Paths;
  Component: ComponentType;
}

export const appRoutes: IRoute[] = [
  { path: Paths.HOME, Component: HomePage },
  { path: Paths.PALETTES, Component: PalettesPage },
  { path: Paths.PALETTE, Component: PalettePage },
  { path: Paths.COLLECTIONS, Component: CollectionsPage },
  { path: Paths.COLLECTION, Component: CollectionPage },
  { path: Paths.PROFILE, Component: ProfilePage },
];
