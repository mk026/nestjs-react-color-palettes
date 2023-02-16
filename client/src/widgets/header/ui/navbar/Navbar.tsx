import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar: FC = () => {
  return (
    <Stack direction="row">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/palettes">Home</NavLink>
      <NavLink to="/collections">Home</NavLink>
    </Stack>
  );
};

export default Navbar;
