import React, { useState } from "react";

import Box from "@mui/material/Box";

import { apiUrl } from "../../apiUrl";
import { handleRespons } from "../../constants/handleRespons";
import CheckForm from "./CheckForm/CheckForm";
import RequestInfo from "./CheckForm/RequestInfo/RequestInfo";

export const ViewRequest = () => {
  const [error, setError] = useState("");
  const [requestData, setRequestData] = useState();

  const getData = async (id) => {
    await fetch(`${apiUrl}/application/${id}`, {
      method: "GET",
    }).then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        handleRespons(res).then((response) => {
          setError(response.message);
        });
      } else {
        handleRespons(res).then((response) => {
          setRequestData(response);
        });
      }
    });
  };

  return (
    <Box mx={5} my={7} display="flex" justifyContent="center">
      {!requestData ? (
        <CheckForm getData={getData} error={error} />
      ) : (
        <RequestInfo requestData={requestData} />
      )}
    </Box>
  );
};

export default ViewRequest;
