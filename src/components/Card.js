import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  margin: 2rem;
  border-radius: 5px;
  overflow: hidden;
  color: white;

  .flag-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .card-info {
    background-color: var(--dark-blue);
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

function Card({ data }) {
  return (
    <StyledCard>
      <div className="crop">
        <img src={data.flags.svg} alt="flag image" className="flag-img" />
      </div>
      <div className="card-info">
        <Link to="/country/:id">
          <h2>{data.name.common}</h2>
        </Link>
        <div className="stats">
          <div>
            Population: <span>{data.population}</span>
          </div>
          <div>
            Region: <span>{data.region}</span>
          </div>
          <div>
            Capital: <span>{data.capital}</span>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
