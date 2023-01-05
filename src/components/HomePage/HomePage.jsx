import React from "react";

import Box from "@mui/material/Box";
import AboutInfo from "./AboutInfo/AboutInfo";
import HomeButtons from "./HomeButtons/HomeButtons";
import DonateInfo from "./DonateInfo/DonateInfo";

export const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      height="100%"
    >
      <AboutInfo />
      <HomeButtons />
      <DonateInfo />
    </Box>
  );
};

export default HomePage;
