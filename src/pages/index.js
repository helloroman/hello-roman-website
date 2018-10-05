import React from 'react';
import { Helmet } from 'react-helmet';
import 'normalize.css';
import './global.scss';
import styles from './index.module.scss';

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
    <h1>Hello, roman</h1>
  </div>
);