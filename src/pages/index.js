import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import { media, colors } from 'utils';
import SectionTemplate from 'templates/SectionTemplate/SectionTemplate';
import MeetingList from 'components/MeetingList/MeetingList';
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
    cta: 'odwiedź kanał',
    link: 'http://youtube.com/helloroman',
  },
  meetups: {
    heading: <span>spotkajmy się!</span>,
    paragraph: 'Żywa i niezwykle zaangażowana społeczność IT nieustannie mnie fascynuje. Staram się brać udział w jak największej liczbie eventów zarówno jako słuchacz oraz prelegent. Sprawdź, na jakich eventach w najbliższym czasie planuję się pojawić.',
  },
  contact: {
    heading: <span>w kontakcie</span>,
    paragraph: 'Masz do mnie pytanie? Chcesz nawiązać współpracę? Śmiało! Zawsze odpisuję, choć bywa że zajmuje mi to kilka dni 😉 Możesz mnie znaleźć także na Instagramie. Bądźmy w kontakcie!',
    cta: 'napisz do mnie',
    link: 'mailto:helloroman.vlog@gmail.com',
  },
};

const meetings = [
  {
    date: '03/12/2018',
    name: 'Vue Vixens @ frontend-con',
    mentor: true
  },
  {
    date: '12/01/2019',
    name: 'Blog conference Poznań',
  },
  {
    date: '04/03/2019',
    name: 'Meet.js Lódź',
  },
  {
    date: '12/06/2019',
    name: 'CoreDump Kraków 2019',
  }
];

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

const StyledSectionsWrapper = styled.div`
  padding-bottom: 200px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledIntroImage = styled(IntroImage)`
  max-width: 200px;
  position: relative;
  right: 0;
  top: 50px;
  width: 40vw;
  
  ${media.tablet`
    width: 30vw;
  `}
  
  ${media.desktop`
    max-width: 300px;
    right: 0;
    top: -20px;
  `}
`;

const StyledVlogImage = styled(VlogImage)`
  max-width: 200px;
  position: relative;
  width: 30vw;
  right: -10%;
  top: 100px;
  
  ${media.tablet`
    width: 30vw;
  `}
  
  ${media.desktop`
    max-width: 300px;
    right: 100px;
    top: -20px;
  `}
`;

const StyledMeetImage = styled(MeetImage)`
  max-width: 200px;
  position: relative;
  width: 30vw;
  right: -15%;
  top: 60px;
  
  ${media.tablet`
    width: 30vw;
  `}
  
  ${media.desktop`
    max-width: 300px;
    right: 0;
    top: -20px;
  `}
`;

const StyledContactImage = styled(ContactImage)`
  max-width: 200px;
  position: relative;
  right: -15%;
  top: 100px;
  width: 30vw;
  
  ${media.tablet`
    width: 30vw;
  `}
  
  ${media.desktop`
    max-width: 300px;
    right: 0;
    top: -20px;
  `}
`;

export default class extends Component {
  componentDidMount() {
    this.mounted = true;

    if (this.mounted) {
      configureAnchors({offset: -350, scrollDuration: 350})
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
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
        <ScrollableAnchor id={'hero'}>
          <HeroImage />
        </ScrollableAnchor>
        <StyledSectionsWrapper>
          <ScrollableAnchor id={'intro'}>
            <SectionTemplate
              heading={pageContent.intro.heading}
              paragraph={pageContent.intro.paragraph}
            >
              <StyledIntroImage />
            </SectionTemplate>
          </ScrollableAnchor>
          <ScrollableAnchor id={'vlog'}>
            <SectionTemplate
              isMirrored
              heading={pageContent.vlog.heading}
              paragraph={pageContent.vlog.paragraph}
              cta={pageContent.vlog.cta}
              link={pageContent.vlog.link}
            >
              <StyledVlogImage />
            </SectionTemplate>
          </ScrollableAnchor>
          <ScrollableAnchor id={'meetups'}>
            <SectionTemplate
              heading={pageContent.meetups.heading}
              paragraph={pageContent.meetups.paragraph}
            >
              <StyledMeetImage />
            </SectionTemplate>
          </ScrollableAnchor>
          <MeetingList meetings={meetings}/>
          <ScrollableAnchor id={'contact'}>
            <SectionTemplate
              heading={pageContent.contact.heading}
              paragraph={pageContent.contact.paragraph}
              cta={pageContent.contact.cta}
              link={pageContent.contact.link}
            >
              <StyledContactImage />
            </SectionTemplate>
          </ScrollableAnchor>
        </StyledSectionsWrapper>
      </div>
    );
  }
}
