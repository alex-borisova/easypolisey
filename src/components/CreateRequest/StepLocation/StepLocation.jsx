import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { apiUrl } from "../../../apiUrl";

export const StepLocation = (props) => {
  const { handleChange, requestData } = props;

  const [locations, setLocations] = useState([]);
  const newLocations = locations.map((item) => ({ ...item, isCheked: false }));

  const getLocations = async () => {
    await fetch(`${apiUrl}/service_types/${requestData.service_type_id}`, {
      method: "GET",
    })
      .then((response) =>
        response.text().then((text) => {
          return text && JSON.parse(text);
        })
      )
      .then((res) => setLocations(res));
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="span" sx={{ fontSize: 20, margin: "14px 0" }}>
          You are allowed to select multiple client service office, but only one
          will be booked. Please select the appropriate Police and Border Guard
          Board service office and click “Next”.
        </FormLabel>
        <FormGroup>
          {newLocations.map((item, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={item.isCheked}
                  onChange={handleChange("service_points")}
                  name={item.name}
                  value={item.id}
                />
              }
              label={`${item.name} (${item.address})`}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default StepLocation;
