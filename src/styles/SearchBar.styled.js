import styled from "styled-components";

const StyledSearchBar = styled.div`
  background-color: ${(props) => props.theme.color1};
  height: 50px;
  max-width: 400px;
  border-radius: 5px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.text2};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    font-size: 1.4rem;
    margin: 0 1.75rem;
  }

  input {
    border: none;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 400;
    background-color: ${(props) => props.theme.color1};
    color: ${(props) => props.theme.text};
  }

  input:focus-visible {
    outline: none;
  }

  @media (min-width: 1000px) {
    width: 400px;
  }
`;

export default StyledSearchBar;
