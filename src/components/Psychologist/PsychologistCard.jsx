import { AvatarWrap, DescriptionWrap, HeadDescriptionWrap, PsyText, PsycWrap, RatingPriceBlock, RatingPriceText } from "./Psychologist.styled"


const PsychologistCard = () => {
  return (
    <PsycWrap>
        <AvatarWrap></AvatarWrap>  
        <DescriptionWrap>
           <HeadDescriptionWrap>
            <PsyText>Psychologist</PsyText>
            <RatingPriceBlock>
              <RatingPriceText>Rating: 4.7</RatingPriceText>
              <RatingPriceText>Price / 1 hour: 180$</RatingPriceText>
            </RatingPriceBlock>
            </HeadDescriptionWrap> 
        </DescriptionWrap>    
    </PsycWrap>
  )
}

export default PsychologistCard
