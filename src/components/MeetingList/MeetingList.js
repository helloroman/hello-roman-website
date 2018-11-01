import React from 'react';
import styled from 'styled-components';
import MeetingInfo from 'components/MeetingInfo/MeetingInfo';

const StyledMeetingList = styled.ul`
  padding: 0;
  margin: 100px 0;
`;

const MeetingList = ({meetings}) => (
  <StyledMeetingList>
    {meetings.map(meeting => (
      <MeetingInfo
        key={meeting.date}
        date={meeting.date}
        mentor={meeting.mentor}
        name={meeting.name}
      />
    ))}
  </StyledMeetingList>
);

export default MeetingList;