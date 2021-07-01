import React from 'react'
import { 
    InfoContainer, 
    InfoWrapper,
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Heading2, 
    Subtitle, 
    Img, 
    ImgWrap 
} from './ConsultantsElements'

const Consultants = ({ lightText, darkText, topText }) => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <Heading>
                        Our Co-Founders
                    </Heading>
                    <InfoRow>
                        <Column1>
                            <ImgWrap>
                                <Img src="../../images/Anwar.png" alt="Anwar Billy" />
                            </ImgWrap>
                            <TextWrapper>
                                <Heading2>Anwar Billy</Heading2>
                                <TopLine topText={topText}>Co-Founder</TopLine>
                                <Subtitle darkText={darkText}>
                                    Anwar is a strategic thinker with a personal touch, that is energized by leveraging his leadership experiences and process-oriented mindset to identify opportunities and develop relationships. Anwar is truly passionate about helping people arrive at their “Ah-ha moment”; the instance when they uncover a solution to a long-standing challenge.
                                </Subtitle>
                                <Subtitle darkText={darkText}>
                                    As a professional,  Anwar enjoys developing analytical tools to improve best practices and make data-driven decisions that enhance operations.  His experience spans a broad set of industries that include electric and water utilities, semiconductors, pharmaceuticals, and research and development for the Department of Defense.  Anwar has also served as the Chief Financial Officer for a $14M non-profit organization, where I was able to implement strategies that decreased debt by almost 50%, improved contract procurement processes, and documented a comprehensive long-range financial plan.
                                </Subtitle>
                                <Subtitle darkText={darkText}>
                                    Anwar holds an MBA in General Management from Indiana University Kelley School of Business and a Bachelor of Science in Mechanical Engineering from Rensselaer Polytechnic Institute.     
                                </Subtitle>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src="../../images/Herbert.png" alt="Herbert Washington" />
                            </ImgWrap>
                            <TextWrapper>
                                <Heading2>Herbert Washington</Heading2>
                                <TopLine topText={topText}>Co-Founder</TopLine>
                                <Subtitle darkText={darkText}>
                                    Herbert is an energetic, highly motivated individual with passion for helping others reach their full potential. 
                                </Subtitle>
                                <Subtitle darkText={darkText}>
                                    Herbert works within the defense sector, where he utilizes project management best practices to ensure projects are completed on time, within design parameters, and cost. Herbert has also served as a Senior Executive for a $14M non-profit organization, where he implemented strategies that lead to a 60% revenue increase year-to-year.
                                </Subtitle>
                                <Subtitle darkText={darkText}>
                                    Herbert holds a Bachelor of Science in Chemical Engineering from Florida Agricultural & Mechanical University.    
                                </Subtitle>
                            </TextWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}

export default Consultants
