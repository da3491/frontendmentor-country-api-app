import React from "react";
import styled from "styled-components";

const StyledNavigation = styled.header`
  background-color: ${(props) => props.theme.color1};
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: ${(props) => props.theme.text};

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

function Navigation({ themeToggler }) {
  return (
    <StyledNavigation>
      <h1>Where in the world?</h1>
      <div>Dark Mode</div>
      <button onClick={() => themeToggler()}>{theme == ""}</button>
    </StyledNavigation>
  );
}

export default Navigation;
