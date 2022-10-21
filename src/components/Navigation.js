import React from "react";
import StyledNavigation from "../styles/Navigation.styled.js";
import { BsMoonFill, BsMoon } from "react-icons/bs";

function Navigation({ theme, themeToggler }) {
  return (
    <StyledNavigation className="shadow">
      <div className="wrapper">
        <h1>Where in the world?</h1>
        {theme === "dark" ? (
          <div className="flex">
            <BsMoonFill className="theme-icon" />
            <div className="toggle-btn" onClick={() => themeToggler()}>
              Dark Mode
            </div>
          </div>
        ) : (
          <div className="flex">
            <BsMoon className="theme-icon" />
            <div className="toggle-btn" onClick={() => themeToggler()}>
              Light Mode
            </div>
          </div>
        )}
      </div>
    </StyledNavigation>
  );
}

export default Navigation;
