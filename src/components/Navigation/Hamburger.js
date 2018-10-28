import React from 'react';
import styled from 'styled-components'
import { zIndex, colors, media } from 'utils';

const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: ${zIndex.level9};
  padding: 20px;
  cursor: pointer;
  
  ${media.desktop`
    display: none;
  `}

  div {
    width: 24px;
    height: 2px;
    position: relative;
    background: ${colors.dark};
    transition: transform .5s ease;

  ::before, ::after {
      width: 24px;
      height: 2px;
      position: absolute;
      content: '';
      display: block;
      background: ${colors.dark};
      transition: transform .5s ease;
    }

  ::before {
      left: -4px;
      top: -6px;
    }

  ::after {
      left: -7px;
      top: 6px;
    }
  }

  &:hover div {
    transform: translateX(-4px);

  &::before {
      transform: translateX(4px);
    }

  &::after {
      transform: translateX(7px);
    }
  }
`;

export default (props) => (
  <StyledHamburger {...props}>
    <div />
  </StyledHamburger>
);
