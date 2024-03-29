import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import NewRequest from "../CreateRequest/CreateRequest";
import ViewRequest from "../ViewRequest/ViewRequest";
import CancelRequest from "../CancelRequest/CancelRequest";

export const App = () => {
  const lightTheme = createTheme({
    palette: {
      type: "light",
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Header />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/create_request" element={<NewRequest />} />
            <Route path="/view_request" element={<ViewRequest />} />
            <Route path="/cancel_request" element={<CancelRequest />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
