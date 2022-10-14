import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 1.5rem;
  max-width: 1200px;

  @media (min-width: 800px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1000px) {
    margin: 0 4rem;

    .flex {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
    }
  }
`;

export default StyledContainer;
