import styled from 'styled-components';
import logoImage from '../../assets/images/helloroman-logo.svg';

const Logo = styled.img`
  width: 50%;
  height: auto;
`;

Logo.defaultProps = {
  src: logoImage,
};

export default Logo;


