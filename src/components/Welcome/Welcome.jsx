import React from 'react';
import mainImg from '../../img/main_img.jpg';
import {
  Button,
  ButtonText,
  LeftPartWelcome,
  MainTitle,
  MainTitleSpan,
  PsyBlock,
  PsyBlockNumber,
  PsyBlockSquare,
  PsyBlockText,
  PsyBlockTextDiv,
  QuestionBlock,
  RightPartWelcome,
  UsersBlock,
  WelcomeImg,
  WelcomeText,
  WelcomeWrap,
} from './Welcome.styled';

const Welcome = () => {
  
return (
    <WelcomeWrap>
      <LeftPartWelcome>
        <MainTitle>
          The road to the <MainTitleSpan>depths</MainTitleSpan> of the human
          soul
        </MainTitle>
        <WelcomeText>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </WelcomeText>
        <Button to={'/psychologists'} type="button">
          <ButtonText>Get started</ButtonText>
        </Button>
      </LeftPartWelcome>
      <RightPartWelcome>
        <WelcomeImg src={mainImg} alt="main_img" /> 
        {/* Не забути зробити оптимізацію картинки */}
        <QuestionBlock></QuestionBlock>
        <UsersBlock></UsersBlock>
        <PsyBlock>
          <PsyBlockSquare></PsyBlockSquare>
          <PsyBlockTextDiv>
            <PsyBlockText>Experienced psychologists</PsyBlockText>
            <PsyBlockNumber>15,000</PsyBlockNumber>
          </PsyBlockTextDiv>
        </PsyBlock>
      </RightPartWelcome>
    </WelcomeWrap>
  );
};

export default Welcome;
