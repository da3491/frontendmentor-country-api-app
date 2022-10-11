import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import styled from "styled-components";

import Card from "./Card";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

const Container = styled.div`
  margin: 1.5rem;

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

function AllCountries() {
  const [region, setRegion] = useState("europe");
  const [searchTerm, setSearchTerm] = useState([]);

  const selectedCountryUrl = `https://restcountries.com/v3.1/${searchTerm}`;
  const countryByRegionUrl = `https://restcountries.com/v3.1/region/${region}`;

  const { isLoading, data } = useFetch(countryByRegionUrl, {
    formatter: (response) => response.json(),
  });

  console.log(typeof data);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <div className="flex">
        <SearchBar />
        <Dropdown onChange={(input) => setRegion(input)} />
      </div>
      <div className="grid">
        {Object.entries(data).map((countryData) => {
          return <Card id={countryData[0]} data={countryData[1]} />;
        })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </Container>
  );
}

export default AllCountries;
