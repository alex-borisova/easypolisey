import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="body1" component="span" sx={{ flexGrow: 1 }}>
                &#169; 2022 Easypolisey
              </Typography>
            </Grid>
            <Grid item>
              <Grid container gap={3}>
                <Grid item>
                  <EmailIcon />
                </Grid>
                <Grid item>
                  <TelegramIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
