import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SidebarBtnWrap, 
    SidebarRoute 
} from "./SidebarElements"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/about-us" onClick={toggle}>About Us</SidebarLink>
                    <SidebarLink to="/consultants" onClick={toggle}>Consultants</SidebarLink>
                    <SidebarLink to="/testimonials" onClick={toggle}>Testimonials</SidebarLink>
                    <SidebarLink to="/services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="/contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="/schedule">Talk with Us</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
