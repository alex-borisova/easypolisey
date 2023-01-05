import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import Toolbar from "@mui/material/Toolbar";

export const Footer = () => {
  const info = [
    {
      icon: <EmailIcon sx={{ color: "#fff" }} />,
      text: "mail@example.com",
    },
    {
      icon: <TelegramIcon sx={{ color: "#fff" }} />,
      text: "@examplegroup",
    },
  ];
  const styleInfo = {
    display: "flex",
    gap: 1,
  };

  const styleBottom = {
    backgroundColor: "#1976d2",
    justifyContent: "space-between",
    alignItems: "center",
    px: 3,
    py: 1,
  };

  return (
    <Toolbar sx={styleBottom}>
      <Typography variant="body1" color="#fff">
        &#169; 2022 Easypolisey
      </Typography>
      <Box display="flex" flexDirection="column">
        {info.map((item, index) => (
          <Box sx={styleInfo} key={index}>
            {item.icon}
            <Typography variant="body1" color="#fff">
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Toolbar>
  );
};

export default Footer;
