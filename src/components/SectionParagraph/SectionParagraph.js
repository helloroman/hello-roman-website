import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

const StyledSectionParagraph = styled.p`
  font-size: 1em;
  line-height: 2;
  margin: 0;
  
  ${media.desktop`
    font-size: 1.1em;
  `}
`;

export default StyledSectionParagraph;