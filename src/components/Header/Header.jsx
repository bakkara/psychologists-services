import React, { useState } from 'react';

import { Container } from '../Container.styled';
import Navigation from '../Navigation/Navigation';
import { ButtonReg, HeaderContainer, HeaderWrap, Logo, LogoDotSpan, LogoSpan } from './Header.styled';
import { ModalPortal } from '../ModalPortal/ModalPortal';
import PopUpRegistration from '../PopUpRegistration/PopUpRegistration';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = e => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <HeaderWrap>
      <Container>
        <HeaderContainer>
        <Logo>
          <LogoSpan>psychologists</LogoSpan>
          <LogoDotSpan>.</LogoDotSpan>services
        </Logo>
        <Navigation />
        <ButtonReg type="button" onClick={toggleModal}>Registration</ButtonReg>
        {isOpen && (
        <ModalPortal title="Registration" onClose={toggleModal}>
            <PopUpRegistration onClose={toggleModal}/>
        </ModalPortal>
      )}
        </HeaderContainer>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
