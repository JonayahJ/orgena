import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    background: var(--dark-slate-gray);
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    line-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    color: var(--dark-slate-gray);

    @media screen and (max-width: 768px){
        dislpay: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.25rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid var(--bitter-lemon);
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 5px;
    background: var(--bitter-lemon);
    white-space: nowrap;
    padding: 10px 22px;
    color: var(--dark-slate-gray);
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: var(--dark-slate-gray);
        color: var(--bitter-lemon);
    }
`;