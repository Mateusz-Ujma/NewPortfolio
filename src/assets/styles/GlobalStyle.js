import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;    
    padding: 0;
    
    background-color: #FFFFFA;
    display: flex;
    flex-direction:column;
    
  }
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
