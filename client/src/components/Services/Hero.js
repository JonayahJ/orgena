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
    ArrowRight 
} from "../HeroSection/HeroElements"
import { Button } from "../ButtonElements"

const ServicesHero = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG 
                    autoPlay 
                    loop 
                    controls={false} 
                    // playsinline 
                    muted={true}
                    src="../../videos/video5.mp4" 
                    type="video/mp4" 
                    poster="../../images/hero3.jpeg" 
                />
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    Our Services
                </HeroH1>
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

export default ServicesHero
