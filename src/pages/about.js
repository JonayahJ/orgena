import React from 'react';
import AboutHero from '../components/AboutUs';
import { Heading, InfoContainer, InfoRow, InfoWrapper, Subtitle, TopLine } from '../components/AboutUs/AboutElements';

const AboutUsPage = () => {
    return (
        <>
            <AboutHero />
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <TopLine>Decisions</TopLine>
                        <Heading>What is a consultant?</Heading>
                        <Subtitle>
                            Decisions. Decisions. Decisions.  As a small business owner you are constantly faced with making highly impactful decisions with limited time and resources that have an immediate effect on the vitality of your business.
                        </Subtitle>
                        <Subtitle> 
                            A consultant provides an experienced approach to leveraging information from previous outcomes and the current state to develop processes, tools, and pathways for business owners to make more effective decisions that bring them closer to achieving their desired goals.
                        </Subtitle>
                    </InfoRow>
                    <InfoRow>
                        <TopLine>Custom Solutions</TopLine>
                        <Heading>Why do I need a consultant?</Heading>
                        <Subtitle>
                            Often the greatest ideas are developed by happenstance.  A founder encounters a common problem with a product or service in their daily life and develops a simple and effective solution that can benefit not only themselves, but also the community around them.
                        </Subtitle>
                        <Subtitle>
                            The challenge for many founders is making the leap from converting a novel idea into a fully functioning business enterprise.   This is where Orgena Consulting stands; in the gap, to help new founders, creators, and seasoned entrepreneurs take their business to the next level, by developing custom solutions that tackle the key questions that matter to you.
                        </Subtitle>
                    </InfoRow>
                    <InfoRow>
                        <TopLine>Advice</TopLine>
                        <Heading>Who are we?</Heading>
                        <Subtitle>
                            Experienced advisors that assists in helping you make efficient decisions as you grow and develop your business.
                        </Subtitle>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default AboutUsPage
