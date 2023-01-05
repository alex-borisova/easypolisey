import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const HomeButtons = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  const buttonStyle = {
    px: 5,
    py: 3,
    borderRadius: 40,
  };

  return (
    <Stack
      spacing={matches ? 2 : 5}
      direction="row"
      justifyContent="center"
      sx={{ my: 3 }}
    >
      <NavLink
        to="/create_request"
        style={{
          textDecoration: "none",
        }}
      >
        <Button variant="contained" color="info" size="large" sx={buttonStyle}>
          Create request
        </Button>
      </NavLink>
      <NavLink
        to="/view_request"
        style={{
          textDecoration: "none",
        }}
      >
        <Button variant="outlined" color="info" size="large" sx={buttonStyle}>
          View request
        </Button>
      </NavLink>
    </Stack>
  );
};

export default HomeButtons;
