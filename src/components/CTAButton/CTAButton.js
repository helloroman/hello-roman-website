import React from 'react';
import styled from 'styled-components';
import { media, colors, typography } from 'utils';

const StyledCTAButton = styled.button`
  font-size: .8em;
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.accent};
  border: 2px solid ${colors.accent};
  background: ${colors.light};
  padding: 10px 30px;
  border-radius: 50px;
  transition: box-shadow .3s ease;
  cursor: pointer;
  
  ${media.desktop`
    font-size: 1em;
  `}
  
  :hover {
    box-shadow: 0 7px 10px -5px rgba(${colors.accentRGB}, .3);
  }
`;

export default StyledCTAButton;
