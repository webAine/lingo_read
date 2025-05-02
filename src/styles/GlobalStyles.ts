import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    line-height: 18px;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.heading};
    margin-bottom: 30px;
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
    font-family: ${({ theme }) => theme.fonts.button};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  .container {
    padding: 50px 20px;
    max-width: 1600px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
