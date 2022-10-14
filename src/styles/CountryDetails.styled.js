import styled from "styled-components";

const StyledContainer = styled.div`
  color: ${(props) => props.theme.text};
  margin: 4rem;

  .content {
    margin: 4rem 0;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 2rem;
    border-radius: 7px;
    border: 1px solid ${(props) => props.theme.color2};
    background-color: ${(props) => props.theme.color1};
    color: ${(props) => props.theme.text};
    font-weight: 600;
    font-size: 0.9rem;
  }

  .back-icon {
    margin-right: 10px;
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  .flag {
    width: 100%;
    height: auto;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
    object-fit: cover;
  }

  .tag {
    background-color: ${(props) => props.theme.color1};
    width: 85px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color2};
    cursor: pointer;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }

  .stat {
    font-weight: 600;
    font-size: 1rem;
  }

  .details {
    margin: 2rem;
  }

  .details .grid-2 {
    gap: 0.5rem;
    margin: 2rem 0;
  }

  span {
    font-weight: 400;
  }
`;

export default StyledContainer;
