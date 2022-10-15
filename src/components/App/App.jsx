import React from "react";

import Header from "../Header/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";

export const App = () => {
  const lightTheme = createTheme({
    palette: {
      type: "light",
    },
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="app">
        <Header />
        <div className="app-container">
          <HomePage />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
