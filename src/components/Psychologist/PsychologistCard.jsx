import { AvatarWrap, DescriptionWrap, HeadDescriptionWrap, PsyText, PsycWrap, RatingPriceBlock, RatingPriceText, RatingPriceTextSpan, SvgHeart, SvgStar } from "./Psychologist.styled"
import icons from '../../img/icons.svg';

const PsychologistCard = () => {
  return (
    <PsycWrap>
        <AvatarWrap></AvatarWrap>  
        <DescriptionWrap>
           <HeadDescriptionWrap>
            <PsyText>Psychologist</PsyText>
            <RatingPriceBlock>
              <SvgStar>
                <use href={`${icons}#icon-star`}></use>
              </SvgStar>
              <RatingPriceText>Rating: 4.7</RatingPriceText>
              <RatingPriceText>Price / 1 hour: <RatingPriceTextSpan>180$</RatingPriceTextSpan> </RatingPriceText>
            </RatingPriceBlock>
            <SvgHeart>
                <use href={`${icons}#icon-heart`}></use>
              </SvgHeart>
            </HeadDescriptionWrap> 
        </DescriptionWrap>    
    </PsycWrap>
  )
}

export default PsychologistCard
