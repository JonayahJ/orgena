import React, { useState } from 'react'
import { 
    HeroContainer, 
    HeroBG, 
    VideoBG, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight } from "./HeroElements"
import { Button } from "../ButtonElements"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted playsinline src="../../videos/video3.mp4" type="video/mp4" poster="../../images/hero1.jpeg" />
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    Dedicated to helping you do the heavy-lifting needed to grow your business
                </HeroH1>
                <HeroP>
                    Achieve higher heights with a trusted helping hand
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="schedule" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
