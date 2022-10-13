import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2rem;
  border-radius: 5px;
  overflow: hidden;
  color: ${(props) => props.theme.text};

  .flag-img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    margin-bottom: -5px;
  }

  h2 {
    font-size: 1.5rem;
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
