import React, { useState } from 'react'
import { 
    HeroContainer, 
    HeroBG, 
    VideoBG, 
    HeroContent, 
    HeroH1, 
    // HeroSub, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight, 
    Button } from "./HeroElements"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted src="../../videos/video.mp4" type="video/mp4" />
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    Dedicated to helping you do the heavy-lifting needed to grow your business
                </HeroH1>
                <HeroP>
                    A trusted hand to guide you as you achieve higher heights
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="schedule" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        fontBig="true"

                        >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
