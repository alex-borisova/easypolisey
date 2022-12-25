import React, { useState } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const CheckForm = (props) => {
  const { error, getData } = props;

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
        {error && (
          <Typography mt={3} color="#d32f2f">
            {error}
          </Typography>
        )}
        <Box mt={3}>
          <Button
            variant="contained"
            sx={{ marginRight: "20px" }}
            onClick={() => getData(id)}
            disabled={!id} //add email
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
