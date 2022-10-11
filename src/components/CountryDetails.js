import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  color: white;
  margin: 4rem;

  .content {
    margin: 4rem 0;
  }

  .back-btn {
    display: inline;
    padding: 0.25rem 2rem;
    background-color: var(--dark-blue);
  }

  a {
    text-decoration: none;
    color: white;
  }

  .flag {
    width: 500px;
    height: 350px;
    background-color: black;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .tag {
    background-color: var(--dark-blue);
    width: 85px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    text-align: center;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .stat {
    font-weight: 600;
    font-size: 1rem;
  }

  .details {
    margin: 2rem;
  }

  .details .grid-2 {
    gap: 0.5rem;
    margin: 2rem 0;
  }
`;

function CountryDetails() {
  return (
    <Container>
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
    </Container>
  );
}

export default CountryDetails;
