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

function Dropdown() {
  return (
    <StyledDropdown>
      <div>Filter by Region</div>
      {/* <input /> */}
    </StyledDropdown>
  );
}

export default Dropdown;
