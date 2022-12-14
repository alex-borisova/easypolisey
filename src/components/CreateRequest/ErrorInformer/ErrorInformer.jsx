import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";

export const ErrorInformer = (props) => {
  const { open, setOpen, errorMessage } = props;

  const alertStyle = {
    marginBottom: "-20px",
    marginTop: "30px",
  };
  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        onClose={() => {
          setOpen(false);
        }}
        sx={alertStyle}
      >
        <AlertTitle>Error</AlertTitle>
        {errorMessage}
      </Alert>
    </Collapse>
  );
};

export default ErrorInformer;
