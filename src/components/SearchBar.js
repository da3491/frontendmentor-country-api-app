import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSearchBar = styled.div`
  background-color: var(--dark-blue);
  height: 50px;
  max-width: 400px;
  margin: 2rem 0;
  border-radius: 5px;
  font-size: 0.8rem;
  color: white;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    font-size: 1.2rem;
    margin: 0 1.75rem;
  }

  @media (min-width: 1000px) {
    width: 400px;
  }
`;

function SearchBar() {
  // let [search, setSearch] = useState("");

  return (
    <StyledSearchBar>
      <div className="icon">🍳</div>
      <div>Search for a country...</div>
      {/* <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /> */}
    </StyledSearchBar>
  );
}

export default SearchBar;
