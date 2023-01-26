import React, { useState } from "react";

import Box from "@mui/material/Box";

import { handleRespons } from "../../constants/handleRespons";
import CheckForm from "./CheckForm/CheckForm";
import RequestInfo from "./RequestInfo/RequestInfo";

export const ViewRequest = () => {
  const [error, setError] = useState("");
  const [requestData, setRequestData] = useState();
  const [openInformer, setOpenInformer] = React.useState(false);

  const getData = async (id, email) => {
    await fetch(`/application/${id}?email=${email}`, {
      method: "GET",
    }).then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        handleRespons(res).then((response) => {
          setError(response.message);
          setOpenInformer(true);
        });
      } else {
        handleRespons(res).then((response) => {
          setRequestData(response);
        });
      }
    });
  };

  return (
    <Box display="flex" justifyContent="center">
      {!requestData ? (
        <CheckForm
          getData={getData}
          error={error}
          openInformer={openInformer}
          setOpenInformer={setOpenInformer}
        />
      ) : (
        <RequestInfo requestData={requestData} />
      )}
    </Box>
  );
};

export default ViewRequest;
