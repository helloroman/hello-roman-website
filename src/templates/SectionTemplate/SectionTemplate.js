import React from 'react';
import styled from 'styled-components';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import SectionParagraph from 'components/SectionParagraph/SectionParagraph';
import CTAButton from 'components/CTAButton/CTAButton';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({isMirrored}) => isMirrored ? 'row-reverse' : 'row'};
`;

const StyledSectionContent = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 50%;
`;

const SectionTemplate = ({isMirrored, heading, paragraph, cta, image, children}) => (
  <StyledWrapper>
    <StyledImageWrapper>{children}</StyledImageWrapper>
    <StyledSectionContent>
      <SectionHeading>{heading}</SectionHeading>
      <SectionParagraph>{paragraph}</SectionParagraph>
      {cta && <CTAButton>{cta}</CTAButton>}
      { console.log(image) }
    </StyledSectionContent>
  </StyledWrapper>
);

export default SectionTemplate;
