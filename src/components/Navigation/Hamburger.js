import React from 'react';
import styles from './Hamburger.module.scss';

export default (props) => (
  <div className={styles.hamburger} {...props}>
    <div className={styles.hamburgerStrip} />
  </div>
);