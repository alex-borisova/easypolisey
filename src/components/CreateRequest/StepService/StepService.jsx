import React, { useEffect, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";

import { apiUrl } from "../../../constants/apiUrl";

export const StepService = (props) => {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    await fetch(`${apiUrl}/service_types`, {
      method: "GET",
    })
      .then((response) =>
        response.text().then((text) => {
          return text && JSON.parse(text);
        })
      )
      .then((res) => setServices(res.service_types));
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <form>
      <FormControl>
        <Typography
          align="center"
          variant="h5"
          fontWeight={500}
          color="primary"
        >
          Choose service
        </Typography>
        <FormLabel
          id="radio-buttons-group-label"
          component="span"
          sx={{ fontSize: 20, margin: "14px 0" }}
        >
          You can book an appointment for one service at a time. Please select
          the appropriate service and click “Next”.
        </FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue={undefined}
          name="radio-buttons-group"
          onChange={props.handleChange("service_type_id")}
        >
          {services.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.id}
              control={<Radio />}
              label={item.name}
              sx={{ mb: "12px" }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default StepService;
