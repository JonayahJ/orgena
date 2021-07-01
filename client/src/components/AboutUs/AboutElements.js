import styled from "styled-components"

export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;
    padding-top: 75px;
    padding-bottom: 75px;

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  padding: 50px;
`;


export const TextWrapper = styled.div`
    max-width: 1100px;
    padding-top: 0;
`

export const TopLine = styled.p`
    color: var(--satin-sheen-gold);
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 45px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`;

export const Subtitle = styled.p`
    max-width: 1100px;
    margin-bottom: 25px;
    font-size: 22px;
    line-height: 30px;
    color: #010606;

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;