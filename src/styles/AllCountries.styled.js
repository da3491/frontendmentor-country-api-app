import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 1.5rem 2rem;

  @media (min-width: 768px) {
    margin: 4rem auto;
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .flex {
      display: flex;
      justify-content: space-between;
      margin: 0 2rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      margin: 0 2rem;
      gap: 4rem;
    }
  }
`;

export default StyledContainer;
