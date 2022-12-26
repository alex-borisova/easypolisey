import React, { useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import ErrorInformer from "../../CreateRequest/ErrorInformer/ErrorInformer";

export const CheckForm = (props) => {
  const { error, getData, setOpenInformer, openInformer } = props;

  const navigate = useNavigate();

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
          To review an appointment, enter the booking number or personal data
          and click “Review”.
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
            onClick={() => getData(id, email)}
            disabled={!id || !email}
          >
            Review
          </Button>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default CheckForm;
