import React from 'react';
import styled from 'styled-components';
import { media, typography } from 'utils';
import MeetingDate from 'components/MeetingDate/MeetingDate';

const StyledWrapper = styled.li`
  margin-bottom: 15px;
  list-style: none;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledParagraph = styled.p`
  margin: 0 0 2px 15px;
  font-size: 1.1em;
  font-weight: ${typography.fontWeightBold};
  
  ${media.desktop`
    font-size: 2em;
  `}
`;

const MeetingInfo = ({date, mentor, name}) => (
  <StyledWrapper>
    <MeetingDate date={date} mentor={mentor}/>
    <StyledParagraph>
      {name}
    </StyledParagraph>
  </StyledWrapper>
);

export default MeetingInfo;