import styled from "styled-components"

export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;

    @media screen and (max-width: 768px){
        padding: 50px 0;
    }
    
    @media screen and (max-width: 480px){
        padding: 10px 0;
    }
`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 60px 20px;

    @media screen and (max-width: 480px){
        padding: 10px 0 10px 0;
    }
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 65%;
    margin: 0 0 10px 0;
    padding-right: 0;
    padding-left: 20%;
`;

export const TopLine = styled.p`
    color: var(--satin-sheen-gold);
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: 5px;
    text-transform: uppercase;
    padding-top: 16px;
`;

export const Heading = styled.h1`
    background: #f9f9f9;
    padding: 25px 0;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    color: var(--dark-slate-gray);
    text-align: left;

    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 30px;
    color: #010606;

    @media screen and (max-width: 480px){
        font-size: 16px;
    }
`;