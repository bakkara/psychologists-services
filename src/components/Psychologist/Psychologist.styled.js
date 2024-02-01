import styled from "styled-components";

export const PsycWrap = styled.div`
    border-radius: 24px;
    background: rgb(255, 255, 255);
    display: flex;
    gap: 24px;
    padding: 24px;
    width: 100%;
`

export const AvatarWrap = styled.div`
    width: 120px;
    height: 120px;
    border: 2px solid rgba(84, 190, 150, 0.2);
    border-radius: 30px;
    padding: 12px;
`

export const DescriptionWrap = styled.div`
    width: 100%;
`
export const HeadDescriptionWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
    
`
export const PsyText = styled.p`
    color: rgb(138, 138, 137);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
    text-align: left;
    margin-right: auto;
`

export const RatingPriceBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 28px;
`

export const RatingPriceText = styled.p`
    color: var(--black-color);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
    text-align: left;

&::after {
        content: '';
        width: 0px;
        height: 16px;
        border: 1px solid rgba(25, 26, 21, 0.2);
        margin-left: 16px;
        margin-right: 16px;
    }
    
    &:last-child::after {
        content: none;
    }
`
export const RatingPriceTextSpan = styled.span`
    color: var(--green-color);
`
export const SvgStar = styled.svg`
    width: 16px;
    height: 16px;
    margin-right: 8px;
`
export const SvgHeart = styled.svg`
    width: 26px;
    height: 26px;
    fill: none;
    stroke: rgb(25, 26, 21);
`


