import { GlobalStyle } from 'assets/styles/GlobalStyle';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <GlobalStyle />
      {children}
    </Router>
  );
};

export default AppProviders;
