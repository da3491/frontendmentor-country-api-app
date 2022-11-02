import React from "react";
import {
  StyledContainer,
  StyledButton,
  StyledContent,
  StyledImg,
  StyledTags,
} from "../styles/CountryDetails.styled";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function CountryDetails() {
  const location = useLocation();
  const state = location.state;
  // console.log(state);
  // const cca = state.cca3.toLowerCase();
  // console.log(cca);
  return (
    <StyledContainer>
      <StyledButton>
        <Link to="/" className="back-btn shadow" role="button">
          <BsArrowLeft className="back-icon" />
          Back
        </Link>
      </StyledButton>
      <StyledContent>
        <StyledImg src={state.flags.svg} />
        <div className="country-stats">
          <h1>{state.name.common}</h1>
          <div className="flex stats">
            <div>
              <div className="stat__title">
                {/* Native Name: <span>{state.name.nativeName[cca]}</span> */}
                Native Name: <span></span>
              </div>
              <div className="stat__title">
                Population: <span>{state.population}</span>
              </div>
              <div className="stat__title">
                Region: <span>{state.region}</span>
              </div>
              <div className="stat__title">
                Sub Region: <span>{state.subregion}</span>
              </div>
              <div className="stat__title">
                Capital: <span>{state.capital}</span>
              </div>
              <div className="stat__title"></div>
            </div>
            <div>
              <div className="stat__title">
                Top Level Domain: <span>{state.tld}</span>
              </div>

              <div className="stat__title">
                {/* Currencies: <span>{state.currencies.ISK.name}</span> */}
                Currencies: <span></span>
              </div>

              <div className="stat__title">
                {/* Languages: <span>{state.languages.isl}</span> */}
                Languages: <span></span>
              </div>
            </div>
          </div>
          <StyledTags>
            <div className="stat__title">Border Countries:</div>
            <div className="border-country-group">
              <div className="tag shadow">France</div>
              <div className="tag shadow">Germany</div>
              <div className="tag shadow">Netherlands</div>
            </div>
          </StyledTags>
        </div>
      </StyledContent>
    </StyledContainer>
  );
}

export default CountryDetails;
