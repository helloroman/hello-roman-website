import React from 'react';
import styled from 'styled-components';
import image from '../../assets/images/helloroman.png';
import Logo from '../Logo/Logo';

const HeroImage = styled.img`
  width: 40%;
  height: auto;
  
  @media (max-width: 400px) {
    display: none;
  }
`;

HeroImage.defaultProps = {
  src: image,
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => (
  <Wrapper>
    <Logo />
    <HeroImage />
  </Wrapper>
)