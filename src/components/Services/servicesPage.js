import React from 'react'
// import HeroSection from './Hero'
import { 
    ServicesH1, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from "./ServicesElements"
import { 
    ServicesContainer,
    ServicesWrapper
} from './ServicesPageElements'

const AllCards = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>All Services</ServicesH1>
            <ServicesWrapper>
                {/* Card 1 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-9.svg" />
                    <ServicesH2>Issue Diagnosis</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                {/* Card 2 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-4.svg" />
                    <ServicesH2>Market Research Assistance</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                {/* Card 3 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-8.svg" />
                    <ServicesH2>Product Cost Allocation</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                {/* Card 4 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-13.svg" />
                    <ServicesH2>Profitability Analysis</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                {/* Card 5 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-6.svg" />
                    <ServicesH2>Break Even Analysis</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                {/* Card 6 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-11.svg" />
                    <ServicesH2>Make or Buy Analysis</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                {/* Card 7 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-5.svg" />
                    <ServicesH2>Strategy Development</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                {/* Card 8 */}
                <ServicesCard>
                    <ServicesIcon src="../../images/svg-10.svg" />
                    <ServicesH2>Mission and Vision Development</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServicesP>
                </ServicesCard>
                
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default AllCards
