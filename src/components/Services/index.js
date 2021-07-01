import React, { useState } from 'react'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    // ServicesP 
} from "./ServicesElements"
import { 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from "../HeroSection/HeroElements"
import { Button } from "../ButtonElements"

const Services = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ServicesContainer id="services">
            <ServicesH1>Featured Services</ServicesH1>
            <ServicesWrapper>
                {/* Card1 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-4.svg" />
                    <ServicesH2>Market Research Assistance</ServicesH2>
                    {/* <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP> */}
                </ServicesCard>
                {/* Card2 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-5.svg" />
                    <ServicesH2>Strategy Development</ServicesH2>
                    {/* <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP> */}
                </ServicesCard>
                {/* Card3 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-6.svg" />
                    <ServicesH2>Break Even <br /> Analysis</ServicesH2>
                    {/* <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP> */}
                </ServicesCard>
            </ServicesWrapper>
            {/* Button */}
            <HeroBtnWrapper>
                    <Button 
                        to="services" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        >
                        View More {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
            </HeroBtnWrapper>
        </ServicesContainer>
    )
}

export default Services
