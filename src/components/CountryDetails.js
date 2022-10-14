import React from "react";
import StyledContainer from "../styles/CountryDetails.styled";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function CountryDetails() {
  const location = useLocation();
  const state = location.state;
  const cca = state.cca3.toLowerCase();
  console.log(state);
  return (
    <StyledContainer>
      <Link to="/" className="back-btn shadow" role="button">
        <BsArrowLeft className="back-icon" />
        Back
      </Link>
      <div className="content grid-2">
        <img className="flag" src={state.flags.svg} />
        <div className="details">
          <h1>{state.name.common}</h1>
          <div className="grid-2">
            <div className="stat">
              {/* Native Name: <span>{state.name.nativeName.isl.official}</span> */}
              {/* Native Name: <span>{state.name.nativeName[cca].official}</span> */}
            </div>
            <div className="stat">
              Top Level Domain: <span>{state.tld}</span>
            </div>
            <div className="stat">
              Population: <span>{state.population}</span>
            </div>
            <div className="stat">
              {/* Currencies: <span>{state.currencies.ISK.name}</span> */}
            </div>
            <div className="stat">
              Region: <span>{state.region}</span>
            </div>
            <div className="stat">
              {/* Languages: <span>{state.languages.isl}</span> */}
            </div>
            <div className="stat">
              Sub Region: <span>{state.subregion}</span>
            </div>
            <div className="stat"></div>
            <div className="stat">
              Capital: <span>{state.capital}</span>
            </div>
          </div>
          <div className="flex">
            <div className="stat">Border Countries:</div>
            <div className="tag shadow">France</div>
            <div className="tag shadow">Germany</div>
            <div className="tag shadow">Netherlands</div>
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

export default CountryDetails;
