import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  color1: "#fff",
  // light grey
  color2: "hsl(0, 0%, 98%)",
  // grey
  color3: "hsl(0, 0%, 52%)",
  text: "#000",
  text2: "hsl(0, 0%, 52%)",
};

export const darkTheme = {
  // darkblue
  color1: "hsl(209, 23%, 22%)",
  // darkerblue
  color2: "hsl(207, 26%, 17%)",
  // same darkerblue
  color3: "hsl(207, 26%, 17%)",
  text: "#fff",
  text2: "#fff",
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.color2}
  }

  .shadow{
    box-shadow: 0px 3px 10px -5px ${(props) => props.theme.color3};
  }

  ::placeholder {
    color: ${(props) => props.theme.text2};
    opacity: 1;
  }
`;
