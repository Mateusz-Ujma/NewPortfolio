import { createGlobalStyle } from 'styled-components';
import cursorImg from 'assets/images/pointer.png';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    cursor: url(${cursorImg}),auto;
    margin: 0;
    font-family: 'Montserrat', sans-serif;    
    padding: 0;
    
    background-color: #FFFFFA;
    display: flex;
    flex-direction:column;
    @media (min-width: 1024px) {
    overflow-x:hidden;
  }
  }
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;
