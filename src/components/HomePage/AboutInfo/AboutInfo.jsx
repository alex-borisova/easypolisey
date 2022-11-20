import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Image from "mui-image";

export const AboutInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        "& > :not(style)": {
          m: 1,
          width: 1 / 2,
          alignSelf: "center",
        },
        py: 3,
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        children={
          <>
            <Typography variant="h4" gutterBottom={true} align="center">
              Hi everyone!
            </Typography>
            <Typography variant="body1" gutterBottom={true} align="center">
              Our service can help you book time in the Estonian police! All you
              have to do is select type of service and the city, and then we
              will find the first free slot and book an appointment for you!
            </Typography>
          </>
        }
      />
      <Image
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
