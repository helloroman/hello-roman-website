import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import { colors } from 'utils';
import SectionTemplate from 'templates/SectionTemplate/SectionTemplate';
import IntroImage from 'assets/images/intro.svg';
import VlogImage from 'assets/images/vlog.svg';
import MeetImage from 'assets/images/meet.svg';
import ContactImage from 'assets/images/contact.svg';

import Navigation from '../components/Navigation/Navigation';
import HeroImage from '../components/HeroImage/HeroImage';

const pageContent = {
  intro: {
    heading: <span>cześć,<br />tu roman!</span>,
    paragraph: 'Jestem frontendowcem, copywriterem oraz twórcą internetowym. Na co dzień tworzę rozwiązania dla dużych, komercyjnych projektów, jednak kiedy tylko mogę, za pośrednictwem mojego vloga pomagam innym dotrzeć do celu, do którego ja sam niedawno uparcie zmierzałem – do zostania programistą.',
  },
  vlog: {
    heading: <span>sprawdź<br />vloga</span>,
    paragraph: 'Z pomocą mojego kanału regularnie dzielę się moją wiedzą i przemyśleniami na temat branży IT – wprowadzam początkujących w świat programowania i pogłębiam wiedzę tych, którzy są tu już jakiś czas. Zajrzyj na mój kanał, aby dowiedzieć się więcej. ',
  },
  meetups: {
    heading: <span>spotkajmy się!</span>,
    paragraph: 'Żywa i niezwykle zaangażowana społeczność IT nieustannie mnie fascynuje. Staram się brać udział w jak największej liczbie eventów zarówno jako słuchacz oraz prelegent. Sprawdź, na jakich eventach w najbliższym czasie planuję się pojawić.',
  },
  contact: {
    heading: <span>w kontakcie</span>,
    paragraph: 'Masz do mnie pytanie? Chcesz nawiązać współpracę? Śmiało! Zawsze odpisuję, choć bywa że zajmuje mi to kilka dni 😉 Możesz mnie znaleźć także na Instagramie. Bądźmy w kontakcie!',
  },
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${colors.light};
    color: ${colors.dark};
  }
`;

// const SectionTemplate = ({isMirrored, heading, paragraph, cta, image}) => (
//   <StyledWrapper>
//     <StyledSectionContent>
//       <SectionHeading>{heading}</SectionHeading>
//       <SectionParagraph>{heading}</SectionParagraph>
//       {cta && <CTAButton>{cta}</CTAButton>}
//     </StyledSectionContent>
//     <StyledImage src={image}/>
//   </StyledWrapper>
// );

export default props => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>
        Hello Roman – frontend developer / youtube creator
      </title>
      <meta
        name="description"
        content="Some content."
      />
    </Helmet>
    <GlobalStyle />
    <Navigation />
    <HeroImage />
    <SectionTemplate
      heading={pageContent.intro.heading}
      paragraph={pageContent.intro.paragraph}
    >
      <IntroImage />
    </SectionTemplate>
    <SectionTemplate
      isMirrored
      heading={pageContent.vlog.heading}
      paragraph={pageContent.vlog.paragraph}
    >
      <VlogImage />
    </SectionTemplate>
    <SectionTemplate
      heading={pageContent.meetups.heading}
      paragraph={pageContent.meetups.paragraph}
    >
      <MeetImage />
    </SectionTemplate>
    <SectionTemplate
      heading={pageContent.contact.heading}
      paragraph={pageContent.contact.paragraph}
    >
      <ContactImage />
    </SectionTemplate>
  </div>
);