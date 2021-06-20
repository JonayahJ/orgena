import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
    );
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
    height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
    padding: 10px;
    }
`;

export const Form = styled.form`
    max-width: 800px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;

    @media screen and (max-width: 400px) {
    padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 16px;
    color: #404040;
    font-size: 30px;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 400px) {
        font-size: 20px;
      }
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #404040;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 0.25px solid;
    border-color: var(--satin-sheen-gold);
    border-radius: 4px;
`;

export const FormTextArea = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 0.25px solid;
    border-color: var(--satin-sheen-gold);
    border-radius: 4px;
    rows: 10;
`;

export const FormButton = styled.button`
    background: var(--satin-sheen-gold);
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;
export const Text = styled.span`
    text-align: center;
    margin-bottom: 50px;
    color: #404040;
    font-size: 20px;
    font-weight: 200;
`;