import React, { Component } from 'react';
import Logo from 'assets/images/helloroman-logo.svg';
import styled from 'styled-components';
import { media, typography } from 'utils';
import { sizes } from 'utils/media';
import posed from 'react-pose';

import Hamburger from './Hamburger';
import { zIndex, colors } from 'utils';

const MenuWrapper = posed.nav({
  open: { x: '0%', staggerChildren: 200 },
  closed: { x: '-100%' }
});

const NavItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 }
});

const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.level9};
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.desktop`
    align-items: center;
    justify-content: space-between;
  `}
`;

const StyledMenuWrapper = styled(MenuWrapper)`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${({isDesktop}) => !isDesktop && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background: ${colors.light};
    overflow-y: hidden;
  `}
`;

const StyledMenuList = styled.ul`
  margin: 0;
  padding: 0;
  
  ${media.desktop`
    display: flex;
    cursor: pointer;
  `}
`;

const StyledNavItem = styled(NavItem)`
  list-style: none;
  margin-bottom: 40px;
  
  ${media.desktop`
    margin: 0 0 0 50px;
  `}
`;

const StyledLanguageSelectItem = styled.span`
  font-weight: ${({isActive}) => isActive 
  ? typography.fontWeightBold
  : typography.fontWeightLight
};

  ::after {
    content: '';
    display: ${({hasSeparator}) => hasSeparator ? 'inline-block' : 'none'};
    width: 1px;
    height: 13px;
    background: ${colors.dark};
    margin: 0 10px;
  }
`;

const StyledLogo = styled(Logo)`
  width: 70px;
  
  ${media.desktop`
    width: 80px;
  `};
`;


class Navigation extends Component {
  state = {
    isMenuOpen: false,
    isDesktop: false,
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth >= sizes.desktop) {
      this.setState({ isDesktop: true, isMenuOpen: true });
    } else {
      this.setState({ isDesktop: false, isMenuOpen: false });
    }
  }

  handleMenuToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  render() {
    const { isMenuOpen, isDesktop } = this.state;
    return (
      <NavigationWrapper>
        <StyledLogo />
        <StyledMenuWrapper
          pose={isMenuOpen ? 'open' : 'closed'}
          isDesktop={isDesktop}
        >
          <StyledMenuList>
            <StyledNavItem>kursy</StyledNavItem>
            <StyledNavItem>youtube</StyledNavItem>
            <StyledNavItem>wydarzenia</StyledNavItem>
            <StyledNavItem>kontakt</StyledNavItem>
            <StyledNavItem>
              <StyledLanguageSelectItem
                hasSeparator
                isActive
              >PL</StyledLanguageSelectItem>
              <StyledLanguageSelectItem>EN</StyledLanguageSelectItem>
            </StyledNavItem>
          </StyledMenuList>
        </StyledMenuWrapper>
        <Hamburger onClick={this.handleMenuToggle} />
      </NavigationWrapper>
    );
  }
}

export default Navigation;