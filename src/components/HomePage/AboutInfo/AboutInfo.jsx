import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const AboutInfo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: matches ? "column" : "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box mb={4} maxWidth={760}>
        <Typography variant="h4" gutterBottom={true} align="center">
          Hi everyone!
        </Typography>
        <Typography variant="body1" gutterBottom={true} align="center">
          Our service can help you book time in the Estonian police! Usually it
          takes several weeks to wait in a digital queue to apply for ID, visa
          or any other document in Tallinn. Our service allows you to find and
          book an appointment in the nearest dates! All you have to do is select
          the type of service and the city, and then we will find the first free
          slot and book an appointment for you!
        </Typography>
      </Box>
      <Image
        duration={2000}
        component="img"
        position="static"
        height={256}
        width={256}
        alt="Policeman"
        src="https://cdn-icons-png.flaticon.com/512/1014/1014174.png"
      />
    </Box>
  );
};

export default AboutInfo;
