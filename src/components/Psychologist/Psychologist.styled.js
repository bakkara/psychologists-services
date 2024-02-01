import styled from "styled-components";

export const PsycWrap = styled.div`
    border-radius: 24px;
    background: rgb(251, 251, 251);
    display: flex;
    gap: 24px;
    padding: 24px;
`

export const AvatarWrap = styled.div`
    width: 120px;
    height: 120px;
    border: 2px solid rgba(84, 190, 150, 0.2);
    border-radius: 30px;
    padding: 12px;
`

export const DescriptionWrap = styled.div`

`
export const HeadDescriptionWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`
export const PsyText = styled.p`
    color: rgb(138, 138, 137);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
    text-align: left;
`

export const RatingPriceBlock = styled.div`
display: flex;
`

export const RatingPriceText = styled.p`
    color: rgb(25, 26, 21);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
    text-align: left;

&::after {
        content: '';
        width: 0px;
        height: 16px;
        border: 1px solid rgba(25, 26, 21, 0.2);
        margin-left: 4px;
        margin-right: 4px;
    }
    
    &:last-child::after {
        content: none;
    }
`




