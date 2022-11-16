import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export const HomeButtons = () => {
  const buttonStyle = {
    px: 5,
    py: 3,
    borderRadius: 40,
  };

  return (
    <Stack
      spacing={5}
      direction="row"
      justifyContent="center"
      sx={{ py: 3, px: 2 }}
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
      <Button variant="outlined" color="info" size="large" sx={buttonStyle}>
        View request
      </Button>
    </Stack>
  );
};

export default HomeButtons;
