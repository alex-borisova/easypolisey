import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export const RequestInfo = (props) => {
  const { requestData } = props;
  console.log(requestData);

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
      <Typography gutterBottom>Service: {requestData?.service_name}</Typography>
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
    </Box>
  );
};

export default RequestInfo;
