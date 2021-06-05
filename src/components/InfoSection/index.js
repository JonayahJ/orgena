import React from 'react'
import { Button } from '../ButtonElements'
import { 
    InfoContainer, 
    InfoWrapper,
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Img, 
    ImgWrap 
} from './InfoElements'

const InfoSection = ({ lightBG, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, topText }) => {
    return (
        <>
            <InfoContainer lightBG={lightBG} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine topText={topText} >{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button 
                                        to="/about"
                                        primary={ primary ? 1 : 0 }
                                        dark={ dark ? 1 : 0 }
                                        dark2={ dark2 ? 1 : 0 }
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default InfoSection
