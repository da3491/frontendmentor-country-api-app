import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  overflow: hidden;

  display: grid;
  grid-template-rows: repeat(2, 50%);
  height: 300px;

  .flag-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  .card-info {
    background-color: ${(props) => props.theme.color1};
    text-align: left;
    padding: 1.5rem;
  }

  .stats {
    margin: 1rem 0;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.6;
  }

  span {
    font-weight: 300;
  }

  @media (min-width: 1000px) {
    margin: 0;
  }
`;

export default StyledCard;
