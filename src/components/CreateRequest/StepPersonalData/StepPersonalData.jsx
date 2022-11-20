import React, { useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export const StepPersonalData = (props) => {
  const [isChildren, setIsChildren] = useState(false);
  const handleChangeIsChildren = (event) => {
    setIsChildren(event.target.checked);
    props.handleChange("is_with_children")(event);
  };

  const numberChildren = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [children, setChildren] = useState(0);

  const handleChangeChildren = (event) => {
    setChildren(+event.target.value);
    props.handleChange("children_quantity")(event);
  };

  return (
    <form>
      <FormControl>
        <FormLabel
          id="radio-buttons-group-label"
          component="span"
          sx={{ fontSize: 20, margin: "14px 0" }}
        >
          Please enter your personal data and make sure that the data you have
          provided are accurate. Once you have entered the data, click
          “Confirm”.
        </FormLabel>
        <Box display="flex" justifyContent="center">
          <Stack spacing={3} sx={{ width: "35%" }}>
            <TextField
              id="first-name"
              label="First Name"
              variant="standard"
              onChange={props.handleChange("name")}
            />
            <TextField
              id="last-name"
              label="Last Name"
              variant="standard"
              onChange={props.handleChange("last_name")}
            />
            <TextField
              id="email"
              label="Email"
              variant="standard"
              onChange={props.handleChange("email")}
            />
            <TextField
              id="phone"
              label="Phone"
              variant="standard"
              onChange={props.handleChange("phone_number")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+372</InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChildren}
                  onChange={handleChangeIsChildren}
                />
              }
              label="I am also submitting an application on behalf of my child or ward:"
            />
            {isChildren && (
              <FormControl>
                <InputLabel id="number-children">
                  Number of children or wards:
                </InputLabel>
                <Select
                  labelId="number-children"
                  id="number-children"
                  value={children}
                  label="Number of children or wards:"
                  onChange={handleChangeChildren}
                >
                  {numberChildren.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </Stack>
        </Box>
      </FormControl>
    </form>
  );
};

export default StepPersonalData;
