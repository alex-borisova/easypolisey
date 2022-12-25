import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";

import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import NewRequest from "../CreateRequest/CreateRequest";
import ViewRequest from "../ViewRequest/ViewRequest";

export const App = () => {
  const lightTheme = createTheme({
    palette: {
      type: "light",
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: 800 }}>
        <Header />
        <Box className="app-container" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/create_request" element={<NewRequest />} />
            <Route path="/view_request" element={<ViewRequest />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
