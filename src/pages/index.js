import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import { colors } from 'utils';

import Navigation from '../components/Navigation/Navigation';
import HeroImage from '../components/HeroImage/HeroImage';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.light};
    color: ${colors.dark};
  }
`;

export default props => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>
        Hello Roman – frontend developer / youtube creator
      </title>
      <meta
        name="description"
        content="Some content."
      />
    </Helmet>
    <GlobalStyle />
    <Navigation />
    <HeroImage />
  </div>
);