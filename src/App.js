import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

import Navigation from "./components/Navigation.js";
import AllCountries from "./components/AllCountries.js";
import CountryDetails from "./components/CountryDetails/CountryDetails.js";

// const StyledApp

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navigation theme={theme} themeToggler={themeToggler} />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/all" element={<AllCountries />} />
          <Route path=":country" element={<CountryDetails />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
