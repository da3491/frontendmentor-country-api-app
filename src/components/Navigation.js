import React from "react";
import styled from "styled-components";

const StyledNavigation = styled.header`
  background-color: var(--dark-blue);
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: white;

  h1 {
    font-size: 0.9rem;
  }

  div {
    font-size: 12px;
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    padding: 0 4rem;
  }
`;

function Navigation() {
  return (
    <StyledNavigation>
      <h1>Where in the world?</h1>
      <div>Dark Mode</div>
      {/* <input/> */}
    </StyledNavigation>
  );
}

export default Navigation;
