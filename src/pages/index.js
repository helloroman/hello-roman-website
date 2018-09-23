import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';
import 'normalize.css';
import Wrapper from '../components/Wrapper/Wrapper';
import Navigation from '../components/Navigation/Navigation';

injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    line-height: 1.62;
    background-color: #F8F8F8;
    color: #1D1D1D;
  }

  *, *:after, *:before {
    box-sizing: border-box;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: auto;
  
  svg {
    width: 100%;
    height: auto;
  }
`;

export default props => (
  <Wrapper>
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
    <Navigation />
  </Wrapper>
);