import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

export const DonateInfo = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        my: 7,
      }}
      children={
        <Card
          variant="outlined"
          sx={{
            width: 1 / 3,
            px: 6,
            py: 5,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&:last-child": {
                pb: 0,
              },
              gap: 2,
              p: 0,
            }}
          >
            <Typography variant="body1" gutterBottom="true" align="center">
              If you like our project and you would like to help us:
            </Typography>

            <Button
              href="https://www.paypal.com/donate/?hosted_button_id=C48S4DMFU9YCG"
              target="_blank"
              rel="noopener"
              variant="contained"
              size="large"
              sx={{ backgroundColor: "#00cc88" }}
            >
              Donate us
            </Button>
            <Typography variant="body1" gutterBottom="true" align="center">
              or
            </Typography>
            <Typography variant="body1" gutterBottom="true" align="center">
              <Box fontWeight="fontWeightMedium" display="inline">
                cripto wallet: 123456Ppfdfgfgj
              </Box>
            </Typography>
          </CardContent>
        </Card>
      }
    />
  );
};

export default DonateInfo;
