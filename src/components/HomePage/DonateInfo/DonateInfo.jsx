import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const DonateInfo = () => {
  return (
    <Box display="flex" justifyContent="center" my={4}>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 600,
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body1" gutterBottom={true} align="center">
            You can support our project with a small donation. It helps us to
            cover costs and also donate to the Ukraine Humanitarian Foundation.
          </Typography>
          <Button
            href="https://buy.stripe.com/14k14e3gzfla9CoaEE"
            target="_blank"
            rel="noopener"
            variant="contained"
            size="large"
            sx={{ backgroundColor: "#00cc88", textAlign: "center" }}
          >
            Donate us with card payment
          </Button>
          <Typography variant="body1" gutterBottom={true} align="center">
            or
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="#1976d2"
            sx={{ wordBreak: "break-word" }}
          >
            Crypto wallet (BEP-20): 0x7984618e9C5FaC73c510D97B8D8695D8ae869e6a
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateInfo;
