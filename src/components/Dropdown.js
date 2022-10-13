import React from "react";
import styled from "styled-components";

const StyledDropdown = styled.div`
  background-color: var(--dark-blue);
  height: 50px;
  width: 200px;
  margin: 2rem 0;
  padding: 0 2rem;
  border-radius: 5px;
  font-size: 0.8rem;
  color: white;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

function Dropdown({ setRegion }) {
  return (
    <StyledDropdown>
      <label htmlFor="regions" className="custom_styles">
        <select name="regions" onChange={(e) => setRegion(e.target.value)}>
          <option value="eur">Filter by Region</option>
          <option value="afr">Africa</option>
          <option value="ame">Americas</option>
          <option value="asia">Asia</option>
          <option value="eur">Europe</option>
          <option value="oce">Oceania</option>
        </select>
      </label>
    </StyledDropdown>
  );
}

export default Dropdown;
