import styled from "styled-components";
import { Link } from "react-router-dom"

export const Button = styled(Link)`
    border-radius: 5px;
    background: ${({primary}) => (primary ? "var(--bitter-lemon)" : "var(--satin-sheen-gold)")};
    white-space: nowrap;
    padding: ${({big}) => (big ? "14px 48px" : "12px 30px")};
    color: ${({dark}) => (dark ? "var(--dark-slate-gray)" : "#fff")};
    font-size: ${({fontBig}) => (fontBig ? "24px" : "20px")};
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover{
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? "#fff" : "var(--dark-slate-gray)")};
    }
`