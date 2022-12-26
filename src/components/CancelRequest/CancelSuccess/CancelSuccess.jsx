import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "mui-image";

export const CancelSuccess = (props) => {
  return (
    <Box mx={5} my={7}>
      <Typography variant="h2">{props.textMessage}</Typography>
      <Image
        duration={0}
        component="img"
        position="static"
        height={256}
        width={256}
        alt="Policeman"
        src="https://cdn-icons-png.flaticon.com/512/9260/9260664.png"
      />
    </Box>
  );
};

export default CancelSuccess;
