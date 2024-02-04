import styled from 'styled-components';

export const ModalWrapStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 26, 21, 0.6);
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    padding-top: 40px;
  }
  @media only screen and (min-width: 1440px) {
    align-items: center;
  }

  & div[name='scroll-container'] {
    width: auto;
    height: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    @media only screen and (min-width: 1440px) {
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
    }

    &::-webkit-scrollbar-thumb {
      background-color: #737272;
      border-radius: 10px;
    }
  }
`;

export const ModalWindowStyled = styled.div`
  width: 280px;
  margin: auto;
  height: auto;
  padding: 24px 12px;
  color: var(--black-color);
  background-color: var(--white-color);
  border-radius: 30px;

  @media only screen and (min-width: 768px) {
    width: 566px;
    padding: 64px;
  }

`;

export const ModalTitleWrapStyled = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;

  & > h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 1.23;
  }
`;

export const CloseButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  transition: all 300ms ease;
  &:hover {
    transform: scale(1.3);
    > svg {
      filter: drop-shadow(0 0 2px #407bff);
    }
  }
`;

export const SvgClose = styled.svg`
    width: 32px;
    height: 32px;
    stroke: var(--black-color)
`