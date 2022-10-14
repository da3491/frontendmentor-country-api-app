import React from "react";
import StyledSearchBar from "../styles/SearchBar.styled";
import { HiSearch } from "react-icons/hi";

function SearchBar({ setSearchTerm }) {
  function handleKeyDown(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      console.log("entered", e.target.value);
      setSearchTerm(e.target.value);
    }
  }

  return (
    <StyledSearchBar className="shadow">
      <HiSearch className="icon" />
      <input
        type="text"
        // onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        placeholder="Search for a country..."
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
