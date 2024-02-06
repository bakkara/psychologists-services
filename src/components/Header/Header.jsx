import React, { useState } from 'react';

import { Container } from '../Container.styled';
import Navigation from '../Navigation/Navigation';
import { ButtonLog, ButtonReg, HeaderContainer, HeaderWrap, Logo, LogoDotSpan, LogoSpan } from './Header.styled';
import { ModalPortal } from '../ModalPortal/ModalPortal';
import PopUpRegistration from '../PopUpRegistration/PopUpRegistration';
import PopUpLogIn from '../PopUpLogIn/PopUpLogin';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setIsTitle] = useState('Registration');


  const toggleModal = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const onClickBtn = title => {
    setIsTitle(title);
    toggleModal();
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
        <ButtonLog type="button" onClick={() => onClickBtn('Log In')}>Log In</ButtonLog>
        <ButtonReg type="button" onClick={() => onClickBtn('Registration')}>Registration</ButtonReg>
        {isOpen && (
        <ModalPortal title={title} onClose={toggleModal}>
          {title === 'Log In' ? (
            <PopUpLogIn onClose={toggleModal}/>
          ) : (
            <PopUpRegistration onClose={toggleModal}/>
          )}

        </ModalPortal>
      )}
        </HeaderContainer>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
