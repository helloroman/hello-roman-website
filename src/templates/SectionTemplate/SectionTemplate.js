import React from 'react';
import styled from 'styled-components';
import { media, zIndex } from 'utils';
import SectionHeading from 'components/SectionHeading/SectionHeading';
import SectionParagraph from 'components/SectionParagraph/SectionParagraph';
import CTAButton from 'components/CTAButton/CTAButton';

const StyledWrapper = styled.div`
  margin-top: 250px;
  max-width: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({isMirrored}) => isMirrored ? 'row' : 'row-reverse'};
  
  ${media.desktop`
    margin-top: 350px;
  `}
`;

const StyledSectionContent = styled.div`
  position: relative;
  z-index: ${zIndex.level3};
  width: 100%;
  padding: 10px 20px;
  
  ${media.desktop`
    flex-shrink: 0;
  `}
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  bottom: 100%;
  right: -5%;
  width: 50%;
  
  ${media.desktop`
    position: relative;
    top: -250px;
    right: 0;
    width: auto;
  `}
`;

const SectionTemplate = ({isMirrored, heading, paragraph, cta, ctaDisabled, link, image, children, id}) => (
  <StyledWrapper isMirrored={isMirrored} id={id}>
    <StyledImageWrapper>{children}</StyledImageWrapper>
    <StyledSectionContent>
      <SectionHeading>{heading}</SectionHeading>
      <SectionParagraph>{paragraph}</SectionParagraph>
      {cta && <a href={link} rel={'noopener noreferrer'} target={'_blank'}><CTAButton ctaDisabled={ctaDisabled}>{cta}</CTAButton></a>}
    </StyledSectionContent>
  </StyledWrapper>
);

export default SectionTemplate;
