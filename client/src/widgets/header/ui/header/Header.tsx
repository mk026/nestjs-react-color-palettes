import { FC } from "react";

import AuthLinks from "../auth-links";
import Navbar from "../navbar";

const Header: FC = () => {
  return (
    <div>
      <Navbar />
      <AuthLinks />
    </div>
  );
};

export default Header;
