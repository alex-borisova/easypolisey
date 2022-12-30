import React, { useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import ErrorInformer from "../../CreateRequest/ErrorInformer/ErrorInformer";

export const FormWrapper = (props) => {
  const {
    title,
    error,
    setOpenInformer,
    openInformer,
    nameFirstButton,
    actionFunction,
    nameSecondButton,
    backFunction,
  } = props;

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const handleId = (event) => {
    setId(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form>
      <FormControl sx={{ alignItems: "center" }}>
        {error && (
          <ErrorInformer
            open={openInformer}
            setOpen={setOpenInformer}
            errorMessage={error}
            style={{ minWidth: "200px" }}
          />
        )}
        <FormLabel
          id="radio-buttons-group-label"
          component="span"
          sx={{ fontSize: 20, margin: "14px 0" }}
        >
          {title}
        </FormLabel>
        <Box
          sx={{ minWidth: "400px" }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <TextField
            id="request-id"
            label="Reservation number"
            variant="standard"
            margin="normal"
            value={id}
            onChange={handleId}
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            margin="normal"
            value={email}
            onChange={handleEmail}
            fullWidth
          />
        </Box>
        <Box mt={3}>
          <Button
            variant="contained"
            sx={{ marginRight: "20px" }}
            onClick={() => actionFunction(id, email)}
            disabled={!id || !email}
          >
            {nameFirstButton}
          </Button>
          <Button variant="outlined" onClick={backFunction}>
            {nameSecondButton}
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default FormWrapper;
