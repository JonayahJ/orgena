import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from "./SidebarElements"
import { FaChevronDown } from "react-icons/fa"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/">Home</SidebarLink>
                    <SidebarLink to="#">About &nbsp; <FaChevronDown /></SidebarLink>
                    <SidebarLink to="/services">Services</SidebarLink>
                    <SidebarLink to="/contact">Contact</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/schedule">Talk with Us</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
