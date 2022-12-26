import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";

import { apiUrl } from "../../apiUrl";
import RequestContent from "./RequestContent/RequestContent";
import SuccessPage from "./SuccessPage/SuccessPage";
import ErrorInformer from "./ErrorInformer/ErrorInformer";
import { handleRespons } from "../../constants/handleRespons";

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
    booking_period: 3,
    is_with_children: false,
    children_quantity: 0,
    service_type_id: 0,
    service_points: [],
  });

  const handleChange = (prop, string, data) => (event) => {
    if (prop === "service_points") {
      const points = data
        .filter((item) => item.isCheked)
        .map((item) => item.id);
      setRequestData({
        ...requestData,
        [prop]: points,
      });
    } else if (prop === "is_with_children") {
      setRequestData({ ...requestData, [prop]: event.target.checked });
    } else if (prop === "date_of_birth") {
      setRequestData({ ...requestData, [prop]: string });
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

  const [errorMessage, setErrorMessage] = React.useState("");
  const [idRequest, setIdRequest] = React.useState(0);

  const [openInformer, setOpenInformer] = React.useState(false);
  const alertStyle = {
    marginBottom: "-20px",
    marginTop: "30px",
  };

  const postData = async () => {
    await fetch(`${apiUrl}/application`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: requestData.name,
        last_name: requestData.last_name,
        date_of_birth: requestData.date_of_birth,
        phone_number: requestData.phone_number,
        email: requestData.email,
        booking_period: requestData.booking_period,
        is_with_children: requestData.is_with_children,
        children_quantity: requestData.children_quantity,
        service_type_id: requestData.service_type_id,
        service_points: requestData.service_points,
      }),
    }).then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        handleRespons(res).then((response) => {
          setErrorMessage(response.message);
          setOpenInformer(true);
        });
      } else {
        handleRespons(res).then((response) => {
          setIdRequest(response.id);
          handleNext();
        });
      }
    });
  };

  const handleConfirm = () => {
    setOpenInformer(false);
    setErrorMessage("");
    postData();
  };

  const disableButton = () => {
    if (activeStep === 0) {
      return requestData.service_type_id === 0;
    }
    if (activeStep === 1) {
      return requestData.service_points.length === 0;
    }
    if (activeStep === 2) {
      return (
        !Boolean(requestData.name) ||
        !Boolean(requestData.last_name) ||
        !Boolean(requestData.date_of_birth) ||
        !Boolean(requestData.phone_number) ||
        !Boolean(requestData.email) ||
        (requestData.is_with_children && requestData.children_quantity === 0)
      );
    }
    return false;
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
          {!errorMessage && <SuccessPage number={idRequest} />}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <ErrorInformer
            open={openInformer}
            setOpen={setOpenInformer}
            errorMessage={errorMessage}
            style={alertStyle}
          />
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
            {activeStep === steps.length - 1 ? (
              <Button onClick={handleConfirm} disabled={disableButton()}>
                Confirm
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={disableButton()}>
                Next
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default CreateRequest;
