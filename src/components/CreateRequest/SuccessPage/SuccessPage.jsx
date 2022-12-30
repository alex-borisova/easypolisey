import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "mui-image";

export const SuccessPage = (props) => {
  const infoData = [
    {
      src: "https://cdn-icons-png.flaticon.com/512/2665/2665525.png",
      alt: "Time",
      text: "As soon as time slot for requeted service will be found - we'll book it for your.",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/3097/3097244.png",
      alt: "One",
      text: "Take into considiration that it is not possible to create 2 application for 1 person.",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/512/2333/2333235.png",
      alt: "Police",
      text: "If you already created application on politsei.ee - we cannot book time slot for you.",
    },
  ];
  const infoStyle = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  return (
    <Box display="flex" flexDirection="column" my={7}>
      <Typography variant="h3" align="center" color="#2e7d32" mb={2}>
        Your application was created!
      </Typography>
      <Typography
        variant="h4"
        align="center"
        mb={5}
        color="#2e7d32"
        fontWeight={600}
      >
        Application number: {props.number}
      </Typography>
      <Typography variant="h4" align="center" color="text.secondary">
        How it works?
      </Typography>
      <Box display="flex" mt={6}>
        {infoData.map((item, index) => (
          <Box sx={infoStyle} key={index} px={15}>
            <Image
              duration={0}
              component="img"
              position="static"
              height={100}
              width={100}
              alt={item.alt}
              src={item.src}
            />
            <Typography align="center">{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SuccessPage;
