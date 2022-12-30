import React from "react";

import { useNavigate } from "react-router-dom";

import FormWrapper from "../../common/FormWrapper/FormWrapper";

export const CheckForm = (props) => {
  const { error, getData, setOpenInformer, openInformer } = props;

  const navigate = useNavigate();

  return (
    <FormWrapper
      title="To review an appointment, enter the booking number or personal data
          and click “Review”."
      error={error}
      setOpenInformer={setOpenInformer}
      openInformer={openInformer}
      nameFirstButton="Review"
      actionFunction={getData}
      nameSecondButton="Cancel"
      backFunction={() => navigate(-1)}
    />
  );
};

export default CheckForm;
