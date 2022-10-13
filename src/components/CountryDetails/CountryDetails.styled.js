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
    width: 100%;
    height: auto;
    background-color: black;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
    object-fit: cover;
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
