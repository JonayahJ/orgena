import React from 'react'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    // ServicesP 
} from "./ServicesElements"

const Services = () => {
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
        </ServicesContainer>
    )
}

export default Services
