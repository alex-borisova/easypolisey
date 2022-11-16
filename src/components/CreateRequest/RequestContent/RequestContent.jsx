import React from "react";

import Box from "@mui/material/Box";

import StepDate from "../StepDate/StepDate";
import StepLocation from "../StepLocation/StepLocation";
import StepPersonalData from "../StepPersonalData/StepPersonalData";
import StepService from "../StepService/StepService";

export const RequestContent = (props) => {
  const { activeStep } = props;
  const isService = activeStep === 0;
  const isLocation = activeStep === 1;
  const isDate = activeStep === 2;
  const isPersonalData = activeStep === 3;

  return (
    <Box my={5}>
      {isService && <StepService />}
      {isLocation && <StepLocation />}
      {isDate && <StepDate />}
      {isPersonalData && <StepPersonalData />}
    </Box>
  );
};

export default RequestContent;
