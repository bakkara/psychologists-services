import React from 'react';

import { Container } from '../Container.styled';
import Navigation from '../Navigation/Navigation';
import { HeaderContainer, HeaderWrap, Logo, LogoDotSpan, LogoSpan } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderContainer>
        <Logo>
          <LogoSpan>psychologists</LogoSpan>
          <LogoDotSpan>.</LogoDotSpan>services
        </Logo>
        <Navigation />
        </HeaderContainer>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
