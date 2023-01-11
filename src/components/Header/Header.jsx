import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar/Sidebar";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Box>
      <AppBar position="static" color="default">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <NavLink
            to="/home"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              color="primary"
            >
              EestiBroneer
            </Typography>
          </NavLink>
          <Sidebar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
