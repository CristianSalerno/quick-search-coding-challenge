import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Mono', monospace; 
    background-color: #f4f4f4;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono', monospace; 
  }
`;

export default GlobalStyle;
