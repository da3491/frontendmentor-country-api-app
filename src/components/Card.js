import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  margin: 2rem;
  border-radius: 5px;
  overflow: hidden;
  color: white;

  .flag-img {
    background-color: #333;
    width: 100%;
    height: 150px;
  }

  h2 {
    font-size: 1.2rem;
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

function Card() {
  return (
    <StyledCard>
      <div className="flag-img"></div>
      <div className="card-info">
        <h2>Country</h2>
        <div className="stats">
          <div>
            Population: <span>81,770,900</span>
          </div>
          <div>
            Region: <span>Europe</span>
          </div>
          <div>
            Capital: <span>Berlin</span>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
