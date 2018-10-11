import React from 'react';
import styles from './HeroImage.module.scss'
import roman from '../../assets/images/helloroman.png';
import Logo from '../../assets/images/helloroman-logo.svg';

export default () => (
  <div className={styles.wrapper}>
    <img src={roman} className={styles.image} />
    <div className={styles.content}>
      <Logo className={styles.logo} />
      <p className={styles.text}>frontend deeloper</p>
      <p className={styles.text}>twórca internetowy</p>
    </div>
  </div>
);