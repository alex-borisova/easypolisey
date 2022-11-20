import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RequestContent from "./RequestContent/RequestContent";

export const CreateRequest = () => {
  const steps = [
    "Choose service",
    "Choose location",
    "Choose period and enter persola data",
  ];

  const [requestData, setRequestData] = React.useState({
    name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    email: "",
    booking_period: 0,
    is_with_children: false,
    children_quantity: 0,
    service_type_id: 0,
    service_points: [],
  });
  console.log(requestData);

  const handleChange = (prop) => (event) => {
    if (prop === "service_points") {
      const points = [...requestData.service_points];
      points.push(+event.target.value);
      setRequestData({ ...requestData, [prop]: points });
    } else if (prop === "is_with_children") {
      setRequestData({ ...requestData, [prop]: event.target.checked });
    } else {
      setRequestData({ ...requestData, [prop]: event.target.value });
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box mx={5} my={7}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <RequestContent
            activeStep={activeStep}
            handleChange={handleChange}
            requestData={requestData}
          />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default CreateRequest;
