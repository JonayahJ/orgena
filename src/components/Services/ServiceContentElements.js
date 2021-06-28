import styled from "styled-components"

export const ServicesWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    padding-top: 100px;
    justify-content: center;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 75%;
    margin: 0 0 10px 0;
    padding-right: 0;
    padding-left: 20%;
`;

export const Heading = styled.h1`
    background: #f9f9f9;
    padding-top: 150px;
    font-size: 60px;
    line-height: 1.1;
    font-weight: 600;
    color: var(--dark-slate-gray);
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 45px;
    }
`;