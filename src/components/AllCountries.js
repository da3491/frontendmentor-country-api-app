import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Card from "./Card/Card";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const Container = styled.div`
  margin: 1.5rem;
  max-width: 1200px;

  @media (min-width: 800px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    margin: 0 4rem;

    .flex {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
    }
  }
`;

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

  useEffect(() => {
    api
      .get(countryByRegionUrl)
      .then((response) => {
        console.log(response.data);
        setCountryList(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [region]);

  useEffect(() => {
    console.log(searchTerm);
    console.log(selectedCountryUrl);
    setIsLoading(true);
    api
      .get(selectedCountryUrl)
      .then((response) => {
        console.log(response.data);
        setCountryList(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <Container>
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
    </Container>
  );
}

export default AllCountries;
