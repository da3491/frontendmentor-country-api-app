import React from "react";
import StyledContainer from "./CountryDetails.styled";
import { Link } from "react-router-dom";

function CountryDetails() {
  return (
    <StyledContainer>
      <Link to="/" className="back-btn" role="button">
        Back
      </Link>
      <div className="content grid-2">
        <div className="flag"></div>
        <div className="details">
          <h2>Belgium</h2>
          <div className="grid-2">
            <div className="stat">
              Native Name: <span></span>
            </div>
            <div className="stat">
              Top Level Domain: <span></span>
            </div>
            <div className="stat">
              Population: <span></span>
            </div>
            <div className="stat">
              Currencies: <span></span>
            </div>
            <div className="stat">
              Region: <span></span>
            </div>
            <div className="stat">
              Languages: <span></span>
            </div>
            <div className="stat">
              Sub Region: <span></span>
            </div>
            <div className="stat"></div>
            <div className="stat">
              Capital: <span></span>
            </div>
          </div>
          <div className="flex">
            <div>Border Countries:</div>
            <div className="tag">France</div>
            <div className="tag">Germany</div>
            <div className="tag">Netherlands</div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default CountryDetails;
