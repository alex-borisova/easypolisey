import React, { useEffect, useState } from "react";

import { apiUrl } from "../../../apiUrl";

export const StepService = () => {
  const [services, setServices] = useState([]);
  console.log(services);

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

  return <>Lala</>;
};

export default StepService;
