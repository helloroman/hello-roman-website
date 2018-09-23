import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import LogoImage from '../../assets/images/helloroman-logo.svg';

const Wrapper = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled(LogoImage)`
  width: 50px;
  height: auto;
`;

const Hamburger = styled.div`
  z-index: 9999;
  position: relative;
  width: 26px;
  height: 2px;
  background-color: #1D1D1D;
  
  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    background-color: #1D1D1D;
    width: 26px;
    height: 2px;
  }
  
  &::before {
    top: -6px;
  }
  
  &::after {
    top: 6px;
  }
`;

const AnimatedMenu = posed.ul({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

const Menu = styled(AnimatedMenu)`
  display: ${({visible}) => setTimeout(() => visible ? 'block' : 'none', 300)};
  margin: 0;
  z-index: 8888;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
`;

class Navigation extends Component {
  state = {
    isMobileMenuOpen: false,
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen,
    }));
  }

  render() {
    return (
      <Wrapper>
        <StyledLogo/>
        <Hamburger onClick={this.toggleMobileMenu}/>
        <Menu
          pose={this.state.isMobileMenuOpen ? 'visible' : 'hidden'}
        />
      </Wrapper>
    )
  }
};

export default Navigation;