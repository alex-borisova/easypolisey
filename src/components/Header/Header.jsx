import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Sidebar from "./Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
import Image from "mui-image";

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" color="default" sx={{ background: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <NavLink
            to="/home"
            style={{
              textDecoration: "none",
            }}
          >
            <Image
              duration={0}
              component="img"
              position="static"
              height="auto"
              width={200}
              alt="Policeman"
              src="https://i.ibb.co/jrjYVFq/logo.jpg"
            />
          </NavLink>
          <Sidebar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
