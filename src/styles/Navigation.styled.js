import styled from "styled-components";

const StyledNavigation = styled.nav`
  background-color: ${(props) => props.theme.color1};
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: ${(props) => props.theme.text};

  h1 {
    font-size: 1.2rem;
  }

  div {
    font-size: 12px;
    font-weight: 600;
  }

  .flex {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .theme-icon {
    font-size: 1rem;
    margin-right: 10px;
    margin-bottom: 3px;
  }

  .toggle-btn {
    border: none;
    background-color: ${(props) => props.theme.color1};
    color: ${(props) => props.theme.text};
    font-size: 0.9rem;
    font-weight: 800;
  }

  @media (min-width: 1000px) {
    padding: 0 4rem;
  }
`;

export default StyledNavigation;
