import React from 'react'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink 
} from "./FooterElements"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* About */}
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                                <FooterLink to="/schedle">About Us</FooterLink>
                                <FooterLink to="/schedle">Consultants</FooterLink>
                                <FooterLink to="/schedle">Services</FooterLink>
                                <FooterLink to="/schedle">Testimonials</FooterLink>
                        </FooterLinkItems>
                        {/* Contact */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to="/schedle">Conact Us</FooterLink>
                                <FooterLink to="/schedle">Talk With Us</FooterLink>
                                <FooterLink to="/schedle">Phone</FooterLink>
                                <FooterLink to="/schedle">Email</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        {/* Social Media */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/schedle">Facebook</FooterLink>
                                <FooterLink to="/schedle">Google+</FooterLink>
                                <FooterLink to="/schedle">Instagram</FooterLink>
                                <FooterLink to="/schedle">Twitter</FooterLink>
                        </FooterLinkItems>
                        {/* Legal */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Legal</FooterLinkTitle>
                                <FooterLink to="/schedle">Cookie Policy</FooterLink>
                                <FooterLink to="/schedle">Terms of Service</FooterLink>
                                <FooterLink to="/schedle">Privacy Policy</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
