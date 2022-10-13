import React from "react";
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

function SearchBar({ setSearchTerm }) {
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      console.log("entered", e.target.value);
      setSearchTerm(e.target.value);
    }
  }

  return (
    <StyledSearchBar>
      <div className="icon">🍳</div>
      <label>Search for a country...</label>
      <input
        type="text"
        // onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
