import React from 'react'
import { 
    InfoContainer, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle
} from '../InfoSection/InfoElements';
import { 
    ServicesWrapper,
    ImgWrap,
    Img
} from './ServiceContentElements';

const ServicesSection = ({ lightBG, id, imgStart, topLine, lightText, headline, darkText, description, topText, img, alt }) => {
    return (
        <>
            <InfoContainer lightBG={lightBG} id={id}>
                <ServicesWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine topText={topText} >{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </ServicesWrapper>
            </InfoContainer>   
        </>
    )
}

export default ServicesSection
