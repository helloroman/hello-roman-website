import React from 'react';
import styled from 'styled-components';
import { colors, typography } from 'utils';

const StyledWrapper = styled.div`
  text-align: right;
  font-weight: ${typography.fontWeightMedium};
  width: 100px;
  height: 3.5em;
  position: relative;
  
  ::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 50%;
    height: 2px;
    width: 100%;
    background: ${({mentor}) => mentor ? colors.accent : colors.dark};
  }
`;

const StyledParagraph = styled.p`
  margin: 8px 0 10px 0;
  font-size: .8em;
`;

const MeetingDate = ({date, mentor}) => (
  <StyledWrapper mentor={mentor}>
    <StyledParagraph>{date}</StyledParagraph>
    {mentor && <StyledParagraph>mentor</StyledParagraph>}
  </StyledWrapper>
);

export default MeetingDate;