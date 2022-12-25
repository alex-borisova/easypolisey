import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const RequestInfo = (props) => {
  const { requestData } = props;
  const navigate = useNavigate();

  const translateStatus = (status) => {
    switch (status) {
      case 0:
        return (status = "in progress");
      case 1:
        return (status = "completed");
      case 2:
        return (status = "canceled");
      case 3:
        return (status = "failed");
      default:
        return status;
    }
  };

  return (
    <Box>
      <Typography gutterBottom>
        {requestData?.name} {requestData?.last_name}, your application number{" "}
        {requestData?.id} is{" "}
        <strong>{translateStatus(requestData?.status)}</strong>.
      </Typography>
      {requestData?.status === 0 && (
        <>
          <Typography gutterBottom>
            Service: {requestData?.service_name}
          </Typography>
          <Typography gutterBottom>
            Now we are looking for a free time slot in the nearest{" "}
            <strong>{requestData?.booking_period} days</strong> below service
            points:
          </Typography>
          <Box ml={1}>
            {requestData?.service_points?.map((item, index) => (
              <Typography key={index}>{item}</Typography>
            ))}
          </Box>
          <Typography fontWeight="fontWeightMedium" gutterBottom>
            Other details of application:
          </Typography>
          <Box ml={1}>
            <Typography gutterBottom>
              Date of birth: {requestData.date_of_birth}
            </Typography>
            <Typography gutterBottom>
              Phone number: {requestData?.phone_number}
            </Typography>
            <Typography gutterBottom>Email: {requestData?.email}</Typography>
            <Typography gutterBottom>
              Children with you: {requestData?.children_quantity}
            </Typography>
          </Box>
        </>
      )}
      {requestData?.status === 1 && (
        <>
          <Typography gutterBottom>
            We have booked a time slot for you:
          </Typography>
          <Box ml={1}>
            <Typography gutterBottom>
              Booking number: {requestData?.id}
            </Typography>
            <Typography gutterBottom>
              Date: {requestData?.date_of_appointment}
            </Typography>
          </Box>
          <Typography gutterBottom>
            You can find original application in your email {requestData?.email}{" "}
            or check it here:
          </Typography>
          <Link href="https://broneering.politsei.ee/">
            https://broneering.politsei.ee/
          </Link>
        </>
      )}
      {(requestData?.status === 2 || requestData?.status === 3) && (
        <Typography gutterBottom>
          If you want to create a new application - come back to the main page
          and create one.
        </Typography>
      )}
      <Box mt={5}>
        {requestData?.status === 0 && (
          <Button
            variant="contained"
            sx={{ marginRight: "20px" }}
            onClick={() => navigate("/cancel_request")}
          >
            Cancel application
          </Button>
        )}
        <Button variant="outlined" onClick={() => navigate("/home")}>
          Back to home
        </Button>
      </Box>
    </Box>
  );
};

export default RequestInfo;
