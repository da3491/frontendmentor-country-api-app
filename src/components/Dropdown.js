import React from "react";
import StyledDropdown from "../styles/Dropdown.styled";

function Dropdown({ setRegion }) {
  return (
    <StyledDropdown className="shadow">
      <select name="regions" onChange={(e) => setRegion(e.target.value)}>
        <option value="eur">Filter by Region</option>
        <option value="afr">Africa</option>
        <option value="ame">Americas</option>
        <option value="asia">Asia</option>
        <option value="eur">Europe</option>
        <option value="oce">Oceania</option>
      </select>
    </StyledDropdown>
  );
}

export default Dropdown;
