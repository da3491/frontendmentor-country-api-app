import React, { useEffect, useState } from "react";
import StyledContainer from "../styles/AllCountries.styled";
import axios from "axios";

import Card from "./Card";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

function AllCountries() {
  const [region, setRegion] = useState("europe");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryList, setCountryList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const selectedCountryUrl = `https://restcountries.com/v3.1/name/${searchTerm}`;
  const countryByRegionUrl = `https://restcountries.com/v3.1/region/${region}`;

  console.log("RUNNING");

  useEffect(() => {
    console.log("in API call");
    api
      .get(countryByRegionUrl)
      .then((response) => {
        console.log(response);
        setCountryList(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [region]);

  useEffect(() => {
    setIsLoading(true);
    api
      .get(selectedCountryUrl)
      .then((response) => {
        console.log(response);
        setCountryList(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <StyledContainer>
      <div className="flex">
        <SearchBar setSearchTerm={setSearchTerm} />
        <Dropdown setRegion={setRegion} />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid">
          {Object.entries(countryList).map((countryData) => {
            return <Card key={countryData[0]} data={countryData[1]} />;
          })}
        </div>
      )}
    </StyledContainer>
  );
}

export default AllCountries;
