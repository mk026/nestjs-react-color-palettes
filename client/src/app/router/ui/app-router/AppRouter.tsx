import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { appRoutes } from "../../../config/routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      {appRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
