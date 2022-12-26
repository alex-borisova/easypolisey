import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";

export const ErrorInformer = (props) => {
  const { open, setOpen, errorMessage, style } = props;

  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        onClose={() => {
          setOpen(false);
        }}
        sx={style}
      >
        <AlertTitle>Error</AlertTitle>
        {errorMessage}
      </Alert>
    </Collapse>
  );
};

export default ErrorInformer;
