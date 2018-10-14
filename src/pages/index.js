import React from 'react';
import { Helmet } from 'react-helmet';
import 'normalize.css';
import './global.scss';

import Navigation from '../components/Navigation/Navigation';
import HeroImage from '../components/HeroImage/HeroImage';

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
    <Navigation />
    <HeroImage />
  </div>
);