import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #fff;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;
