import React from 'react';
import { 
    InfoContainer, 
    ServicesWrapper,
    TextWrapper, 
    Heading, 
    TopLine, 
    ImgWrap,
    Img,
    Subtitle
} from './ServicesSectionElements';

const ServicesSection = () => {
    return (
        <InfoContainer>
            <ServicesWrapper>
                {/* Seed */}
                <TextWrapper>
                    <ImgWrap>
                        <Img 
                            src="../../icons/icon-1.svg" 
                            alt="Plant seed" 
                        />
                    </ImgWrap>
                    <TopLine>A Fresh Perspective</TopLine>
                    <Heading>Seed</Heading>
                    <Subtitle>
                        Be it at home, at work, or at play, great ideas have a way of striking us almost always out of the blue; but the question of “will it work?” tends to remain unclear and unanswered. Orgena can provide a fresh perspective on ideas that are at the Seed stage and in need of a strategic approach to mapping, vetting, and demonstrating true merit.
                    </Subtitle>
                </TextWrapper>
                {/* Sprout */}
                <TextWrapper>
                    <ImgWrap>
                        <Img 
                            src="../../icons/icon-2.svg" 
                            alt="Sprout" 
                        />
                    </ImgWrap>
                    <TopLine>Minimum Viable Product</TopLine>
                    <Heading>Sprout</Heading>
                    <Subtitle>
                        Through research and analysis you have arrived at a well defined idea.  You may have even established initial relationships with potential partners or vendors, but no sales as of yet.  It's easy to get caught in the assessment phase and struggle to convert a novel idea into an operating business. Orgena can assist with defining and refining the minimum viable product for your business.
                    </Subtitle>
                </TextWrapper>
                {/* Seedling */}
                <TextWrapper>
                    <ImgWrap>
                        <Img 
                            src="../../icons/icon-3.svg" 
                            alt="Growing plant" 
                        />
                    </ImgWrap>
                    <TopLine>Your Small Business</TopLine>
                    <Heading>Seedling</Heading>
                    <Subtitle>
                        Your LLC has been in business from anywhere from a few weeks to a few years. The company consists of anywhere from 1-6 people who work during off hours and on weekends to produce a product or provide a service. Profits may be small, but passions are high and the operation is making a difference in the lives of others; but how do you grow?  Let Orgena help you fulfill the need for optimization and efficiency improvements.
                    </Subtitle>
                </TextWrapper>
            </ServicesWrapper>
        </InfoContainer>   
    )
}

export default ServicesSection
