import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar/Sidebar";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="primary"
          >
            EasyPolisey
          </Typography>
          <Sidebar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
