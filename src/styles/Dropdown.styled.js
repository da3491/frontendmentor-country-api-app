import styled from "styled-components";

const StyledDropdown = styled.div`
  background-color: ${(props) => props.theme.color1};
  height: 50px;
  width: 200px;
  margin: 2rem 0;
  border-radius: 5px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  select {
    border: none;
    border-radius: 5px;
    padding: 1rem;
    margin-right: 1rem;
    width: 100%;
    background-color: ${(props) => props.theme.color1};
    color: ${(props) => props.theme.text};
    font-weight: 600;
  }

  select:focus {
    outline: none;
  }
`;

export default StyledDropdown;
