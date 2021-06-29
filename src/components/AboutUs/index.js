import React, { useState } from 'react'
import { 
    HeroContainer, 
    HeroBG, 
    VideoBG, 
    HeroContent, 
    HeroH1, 
    // HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight } from "../HeroSection/HeroElements"
import { Button } from "../ButtonElements"

const AboutHero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted src="../../videos/video4.mp4" type="video/mp4" />
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    About Orgena Consulting
                </HeroH1>
                {/* <HeroP>
                    Lorem ipsum dolor sit exitus mundus est.
                </HeroP> */}
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

export default AboutHero
