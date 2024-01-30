import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeWrap = styled.div`
    display: flex;
    gap: 125px;
    align-items: center;
`

export const LeftPartWelcome = styled.div`
    width: 595px;
`

export const MainTitle = styled.h1`
    font-size: 80px;
    font-weight: 600;
    line-height: 1.025;
    letter-spacing: -1.6px;
    margin-bottom: 20px;
`

export const MainTitleSpan = styled.span`
    color: var(--green-color);
    font-style: italic;
`
export const WelcomeText = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.36px;
    margin-bottom: 40px;
    width: 510px;
`
export const WelcomeImg = styled.img`
    width: 464px;
    height: 526px;
    border-radius: 10px;
    position: relative;
`

export const RightPartWelcome = styled.div`
    width: 464px;
    position: relative;
`

export const QuestionBlock = styled.div`
    border-radius: 10px;
    background: #4535AF;
    width: 40px;
    height: 40px;
    transform: rotate(-15deg);
    position: absolute;
    top: 185px;
    left: -30px;
    padding: 16px;
`

export const UsersBlock = styled.div`
    border-radius: 10px;
    background: #FBC75E;
    width: 48px;
    height: 48px;
    transform: rotate(15deg);
    position: absolute;
    top: 38px;
    right: -40px;
    padding: 16px;
`

export const PsyBlock = styled.div`
    border-radius: 20px;
    background: var(--green-color);
    width: 311px;
    height: 118px;
    position: absolute;
    bottom: 75px;
    left: -102px;
    padding: 32px;
    display: flex;
    gap: 16px;
`
export const PsyBlockSquare = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 13px;
    background: var(--white-color);
`

export const PsyBlockText = styled.p`
    color: rgba(251, 251, 251, 0.50);
    font-size: 14px;
`
export const PsyBlockNumber = styled.p`
    color: var(--white-color);
    font-size: 24px;
    font-weight: 700;
`

export const PsyBlockTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Button = styled(Link)`
    display: inline-block;
    padding: 18px 50px;
    border-radius: 30px;
    background: var(--green-color);
`

export const ButtonText = styled.p`
    color: var(--white-color);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.2px;
`