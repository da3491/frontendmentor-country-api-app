import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  color: ${(props) => props.theme.text};
  margin: 3rem 2rem;

  @media (min-width: 1199px) {
    margin: 4rem auto;
  }
`;

export const StyledImg = styled.img`
  max-width: 50%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledButton = styled.div`
  .back-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 2rem;
    margin-bottom: 3rem;
    border-radius: 5px;
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
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5rem;
  }

  .country-stats {
    max-width: 100%;
  }

  h1 {
    margin: 1rem 0;
  }

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;
  }

  .stat__title {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.8;
  }

  span {
    font-weight: 400;
  }
`;

export const StyledTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media (min-aspect-ratio: 3/4) {
    flex-direction: row;
  }

  .stat__title {
    font-weight: 600;
    font-size: 1rem;
  }

  .tag {
    background-color: ${(props) => props.theme.color1};
    width: 90px;
    padding: 0.25rem 0.25rem;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color2};
    cursor: pointer;
  }

  .border-country-group {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }
`;
