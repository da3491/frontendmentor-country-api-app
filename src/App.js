import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation.js";
import AllCountries from "./components/AllCountries.js";
import CountryDetails from "./components/CountryDetails.js";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/all" element={<AllCountries />} />
        <Route path="/country:id" element={<CountryDetails />}></Route>
        <Route path="/country" element={<CountryDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
