import styled from "styled-components"

export const InfoContainer = styled.div`
    color: #fff;
    background: #010606;

    @media screen and (max-width: 768px){
        // padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 1100px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
    margin-top: 150px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 1100px){
        margin-top: 75px;
    }
    
    @media screen and (max-width: 480px){
        margin-top: 75px;
    }
`;

export const Column2 = styled.div`
    margin-top: -238px;
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 1100px){
        margin-top: 5px;
    }
    @media screen and (max-width: 480px){
        margin-top: 5px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: ${({topText}) => (topText ? "var(--bitter-lemon)" : "var(--satin-sheen-gold)")};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-top: 150px;
    font-size: 55px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 40px;
        margin-top: 75px;
    }
`;

export const Heading2 = styled.h2`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa;

    @media screen and (max-width: 480px){
        font-size: 25px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 22px;
    line-height: 30px;
    color: ${({darkText}) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`