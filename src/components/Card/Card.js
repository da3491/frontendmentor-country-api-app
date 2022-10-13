import React from "react";
import StyledCard from "./Card.styled.js";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <StyledCard>
      <img src={data.flags.svg} alt="flag image" className="flag-img" />
      <div className="card-info">
        <Link to={`country/${data.name.common}`}>
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
