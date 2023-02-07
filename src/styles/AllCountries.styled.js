import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2em;
    margin-bottom: 2em;

    @media (max-aspect-ratio: 3/4) {
      width: 90%;
      margin: 0 auto;
      flex-direction: column;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    width: 75%;
    margin: 0 auto;
    margin-top: 2em;
    gap: 4em;

    @media (min-aspect-ratio: 3/4) {
      width: 100%;
      grid-template-columns: repeat(4, minmax(225px, 25%));
      gap: 4em;
    }
  }
`;

export default StyledContainer;
