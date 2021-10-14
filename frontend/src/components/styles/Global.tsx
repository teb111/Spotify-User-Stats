import { createGlobalStyle } from "styled-components";

interface Theme {
  colors: {
    background: string;
    color: string;
    nav: string;
    logoColor: string;
  };
}

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  *::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
    background: ${({ theme }) =>
      theme?.colors?.background ? theme?.colors?.background : "#000"};
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: inherit;
  transition: .9s linear;
  color: ${({ theme }) =>
    theme?.colors?.color ? theme?.colors?.color : "#000"};
}

h1, h2, h3, h4, h5 ,h6, p, span, div {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  margin: 0;
  padding: 0;
}
`;
