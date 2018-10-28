import React from 'react';
import styled from 'styled-components';
import ActionButton from 'components/ActionButton/ActionButton';
import CTAButton from 'components/CTAButton/CTAButton';
import roman from 'assets/images/helloroman.png';
import Logo from 'assets/images/helloroman-logo.svg';
import { zIndex, colors, media } from 'utils';

const StyledWrapper = styled.div`
  background: url(${roman}) no-repeat 10% 20%;
  width: 100%;
  height: 100vh;
  z-index: ${zIndex.level1};
  padding: 20px 50px;
  position: relative;
  background-size: cover;

  ${media.desktop`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-size: auto 90%;
    background-position: 80% 100%;
  `}
  
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    z-index: ${zIndex.level2};
    opacity: .7;
    content: '';
    display: block;
    background: ${colors.light};

    ${media.desktop`
      display: none;
    `}
  }
`;

const StyledContent = styled.div`
  position: relative;
  top: 40%;
  z-index: ${zIndex.level3};
  
  & p {
    margin: 0;
    
    &:first-of-type {
      margin: 10px 0 5px 0;
    }
  }
  
  ${media.desktop`
    top: 0;
    left: -10%;
  `};
`;

const StyledLogo = styled(Logo)`
  width: 70%;
  
  ${media.tablet`
    width: 200px;
  `}
  
  ${media.desktop`
    width: 300px;
  `}
`;

const MobileActionButton = styled(ActionButton)`
  ${media.desktop`
    display: none;
  `}
`;

const DesktopActionButton = styled(ActionButton)`
  display: none;
  
  ${media.desktop`
    display: flex;
  `}
`;

export default () => (
  <StyledWrapper>
    <StyledContent>
      <StyledLogo />
      <p>frontend developer</p>
      <p>twórca internetowy</p>
      <DesktopActionButton />
    </StyledContent>
    <MobileActionButton />
  </StyledWrapper>
);