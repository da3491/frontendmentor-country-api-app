import styled from "styled-components";

const StyledContainer = styled.div`
  color: white;
  margin: 4rem;

  .content {
    margin: 4rem 0;
  }

  .back-btn {
    display: inline;
    padding: 0.25rem 2rem;
    background-color: var(--dark-blue);
  }

  a {
    text-decoration: none;
    color: white;
  }

  .flag {
    width: 500px;
    height: 350px;
    background-color: black;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .tag {
    background-color: var(--dark-blue);
    width: 85px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    text-align: center;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
`;

export default StyledContainer;
