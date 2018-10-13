import React, { Component } from 'react';
import posed from 'react-pose';
import styles from './Navigation.module.scss';

import Hamburger from './Hamburger';

const MenuWrapper = posed.nav({
  open: { x: '0%', staggerChildren: 100 },
  closed: { x: '-100%' }
});

const NavItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 }
});

class Navigation extends React.Component {
  state = {
    isMenuOpen: false,
  }

  handleMenuToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  render() {
    const { isMenuOpen } = this.state;
    return (
      <div className={styles.navigationWrapper}>
        <p>Logo</p>
        <MenuWrapper
          pose={isMenuOpen ? 'open' : 'closed'}
          className={styles.menu}
        >
          <ul>
            <NavItem>kursy</NavItem>
            <NavItem>youtube</NavItem>
            <NavItem>wydarzenia</NavItem>
            <NavItem>kontakt</NavItem>
            <NavItem>
              <span className={styles.active}>PL</span>
              <span>EN</span>
            </NavItem>
          </ul>
        </MenuWrapper>
        <Hamburger onClick={this.handleMenuToggle} />
      </div>
    );
  }
}

export default Navigation;