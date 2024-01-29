import React from 'react';
import mainImg from '../../img/main_img.jpg';
import {
  LeftPartWelcome,
  MainTitle,
  MainTitleSpan,
  PsyBlock,
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
        <button type="button">Get started</button>
      </LeftPartWelcome>
      <RightPartWelcome>
        <WelcomeImg src={mainImg} alt="main_img" /> 
        {/* Не забути зробити оптимізацію картинки */}
        <QuestionBlock></QuestionBlock>
        <UsersBlock></UsersBlock>
        <PsyBlock></PsyBlock>
      </RightPartWelcome>
    </WelcomeWrap>
  );
};

export default Welcome;
