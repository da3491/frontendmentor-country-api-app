import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color1};
  height: 75px;
  padding: 1rem;
  color: ${(props) => props.theme.text};

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    max-width: 1200px;
    margin: 2rem auto;
  }

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
`;

export default StyledNavigation;
