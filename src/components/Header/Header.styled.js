import styled from 'styled-components';

export const HeaderWrap = styled.header`
    padding: 0;
    border-bottom: 1px solid rgba(25, 26, 21, 0.10);
`
export const HeaderContainer = styled.header`
    display: flex;
    padding: 32px 0;
    align-items: center;
`

export const Logo = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.4px;
    margin-right: 130px;
    margin-bottom: 0;
`

export const LogoSpan = styled.span`
    color: var(--green-color);
    font-weight: 700;
`
export const LogoDotSpan = styled.span`
    color: var(--green-color);
    font-weight: 500;
`