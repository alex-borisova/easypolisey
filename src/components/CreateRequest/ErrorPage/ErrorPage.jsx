import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "mui-image";

export const SuccessPage = (props) => {
  const infoStyle = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  return (
    <Box>
      <Image
        duration={0}
        component="img"
        position="static"
        height={100}
        width={100}
        alt="Error"
        // src={item.src}
      />
      <Typography align="center">{props.errorMessage}</Typography>
    </Box>
  );
};

export default SuccessPage;
