import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

const StyledSectionHeading = styled.h2`
  font-size: 3em;
  letter-spacing: -.03em;
  margin: 200px 0 40px 0;
  
  ${media.desktop`
    font-size: 4em;
  `}
`;

export default StyledSectionHeading;

