import React from "react";

import AboutInfo from "./AboutInfo/AboutInfo";
import HomeButtons from "./HomeButtons/HomeButtons";
import DonateInfo from "./DonateInfo/DonateInfo";

export const HomePage = () => {
  return (
    <>
      <AboutInfo />
      <HomeButtons />
      <DonateInfo />
    </>
  );
};

export default HomePage;
