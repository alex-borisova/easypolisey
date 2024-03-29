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
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export const StepPersonalData = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const [isChildren, setIsChildren] = useState(false);
  const handleChangeIsChildren = (event) => {
    setIsChildren(event.target.checked);
    props.handleChange("is_with_children")(event);
  };

  const [isConsent, setIsConsent] = useState(false);
  const handleChangeIsConsent = (event) => {
    setIsConsent(event.target.checked);
    props.handleChange("consent")(event);
  };

  const numberChildren = [
    { value: "0", disabled: true },
    { value: 1, disabled: false },
    { value: 2, disabled: false },
    { value: 3, disabled: false },
    { value: 4, disabled: false },
    { value: 5, disabled: false },
    { value: 6, disabled: false },
    { value: 7, disabled: false },
    { value: 8, disabled: false },
    { value: 9, disabled: false },
    { value: 10, disabled: false },
  ];
  const [children, setChildren] = useState(numberChildren[0].value);

  const handleChangeChildren = (event) => {
    console.log(event.target.value);
    setChildren(+event.target.value);
    props.handleChange("children_quantity")(event);
  };

  const [date, setDate] = useState(null);

  const bookingPeriod = [
    { label: "3 days", value: 3 },
    { label: "1 week", value: 7 },
    { label: "2 weeks", value: 14 },
    { label: "3 weeks", value: 21 },
    { label: "1 month", value: 30 },
  ];
  const [period, setPeriod] = useState(bookingPeriod[0].value);

  const handleChangePeriod = (event) => {
    setPeriod(event.target.value);
    props.handleChange("booking_period")(event);
  };

  return (
    <form>
      <FormControl>
        <Typography
          align="center"
          variant="h5"
          color="primary"
          fontWeight={500}
        >
          Choose period and enter persola data
        </Typography>
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
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Stack spacing={3} sx={{ width: matches ? "100%" : "40%" }}>
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
                  inputProps: { maxLength: 8 },
                }}
              />
              <DatePicker
                label="Date of birth"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                  props.handleChange(
                    "date_of_birth",
                    moment(newValue).format("DD.MM.YYYY")
                  )();
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <FormControl>
                <InputLabel id="booking_period">Booking period:</InputLabel>
                <Select
                  labelId="booking_period:"
                  id="booking_period:"
                  value={period}
                  label="Booking period:"
                  onChange={handleChangePeriod}
                >
                  {bookingPeriod.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
                <Typography color="rgba(0, 0, 0, 0.6)" mt={1}>
                  *For example: 1 week means that you expect to book an
                  appointment in the nearest week
                </Typography>
              </FormControl>
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
                    defaultValue={"0"}
                  >
                    {numberChildren.map((item, index) => (
                      <MenuItem
                        key={index}
                        value={item.value}
                        disabled={item.disabled}
                      >
                        {item.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isConsent}
                    onChange={handleChangeIsConsent}
                  />
                }
                label=" I consent to the processing of the submitted personal data. Personal data are processed solely for booking the service. Initial data processor is booking service. Data is stored in the booking system of 3 months after application creation. You can delete your data by cancelling application here. After time slot booking - the chief data processor is the Police and Border Guard Board (139 Pärnu Road, Tallinn 15060; email: ppa@politsei.ee). The authorised processor, who is the service provider of the booking system, is Hansab AS (11 Keevise St, Tallinn 11415; email: info@hansab.ee). The data are stored in the booking system for 3 months as of the appointment date and will be deleted thereafter. Consent to the processing of personal data may be withdrawn at any time by cancelling the booking at https://broneering.politsei.ee. Withdrawal of consent will not affect any data processing already carried out under the consent."
                componentsProps={{
                  typography: {
                    sx: { fontSize: "12px" },
                  },
                }}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
      </FormControl>
    </form>
  );
};

export default StepPersonalData;
