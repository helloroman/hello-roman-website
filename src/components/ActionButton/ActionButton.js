import React from 'react';
import styled from 'styled-components';
import { scrollIt } from 'utils/scroll';
import { media, colors } from 'utils';

const StyledActionButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8888;
  margin: 0 auto;
  background-color: rgba(${colors.accentRGB}, .5);
  cursor: pointer;
  box-shadow: 0 0 0 2px rgba(${colors.accentRGB}, 0);
  transition: box-shadow .3s ease-in;
  
  :hover {
    box-shadow: 0 0 0 5px rgba(${colors.accentRGB}, .2);
  }

  ${media.desktop`
    position: static;
    margin: 50px auto;
  `}
  
  & div {
    border-radius: 50%;
    width: 20px;
    height: 20px; 
    background: ${colors.accent};
    position: relative;

    ::before,
    ::after {
      width: 8px;
      height: 2px;
      content: '';
      display: block;
      position: absolute;
      background: white;
    }

    &::before {
      left: 4px;
      top: 50%;
      transform: rotate(45deg);
    }

    &::after {
      right: 4px;
      top: 50%;
      transform: rotate(-45deg);
    }
  }
}
`;

const handleScrolling = () => scrollIt(
  document.getElementById('hello'),
  300,
  'easeOutQuad',
);

export default (props) => (
  <StyledActionButton {...props} onClick={handleScrolling}>
    <div />
  </StyledActionButton>
)