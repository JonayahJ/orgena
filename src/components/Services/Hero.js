import React from 'react'
import { 
    HeroContainer, 
    HeroBG, 
    HeroContent, 
    HeroH1
} from "../HeroSection/HeroElements"

const HeroSection = () => {
    
    return (
        <HeroContainer>
            <HeroBG>
                <img src="../../images/BlackMan1.png" alt="Black man working on a laptop"/>
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    Our Services
                </HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
