import React, { useState } from "react";

import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

import FormWrapper from "../common/FormWrapper/FormWrapper";
import { apiUrl } from "../../apiUrl";
import { handleRespons } from "../../constants/handleRespons";

export const CancelRequest = (props) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [openInformer, setOpenInformer] = useState(false);

  const navigate = useNavigate();

  const putData = async (id, email) => {
    await fetch(`${apiUrl}/application/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        handleRespons(res).then((response) => {
          setError(response.message);
          setOpenInformer(true);
        });
      } else {
        handleRespons(res).then((response) => {
          setSuccess(response.message);
        });
      }
    });
  };
  return (
    <Box mx={5} my={7} display="flex" justifyContent="center">
      <FormWrapper
        title="To cancel an appointment, enter the booking number or personal data
          and click “Cancel”."
        error={error}
        setOpenInformer={setOpenInformer}
        openInformer={openInformer}
        nameFirstButton="Cancel"
        actionFunction={putData}
        nameSecondButton="Back to home"
        backFunction={() => navigate("/home")}
        success={success}
      />
    </Box>
  );
};

export default CancelRequest;
