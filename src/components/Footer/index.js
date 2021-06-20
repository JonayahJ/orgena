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
                                <FooterLink to="#">About Us</FooterLink>
                                <FooterLink to="#">Consultants</FooterLink>
                                <FooterLink to="#">Services</FooterLink>
                                <FooterLink to="#">Testimonials</FooterLink>
                        </FooterLinkItems>
                        {/* Contact */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to="#">Conact Us</FooterLink>
                                <FooterLink to="#">Talk With Us</FooterLink>
                                <FooterLink to="#">Phone</FooterLink>
                                <FooterLink to="#">Email</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        {/* Social Media */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <a href="https://facebook.com" target="_blank" rel="noopenner noreferrer" className="footerLink">Facebook</a>
                                <a href="https://google.com" target="_blank" rel="noopenner noreferrer" className="footerLink">Google+</a>
                                <a href="https://instagram.com" target="_blank" rel="noopenner noreferrer" className="footerLink">Instagram</a>
                                <a href="https://twitter.com" target="_blank" rel="noopenner noreferrer" className="footerLink">Twitter</a>
                        </FooterLinkItems>
                        {/* Legal */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Legal</FooterLinkTitle>
                                <FooterLink to="#">Cookie Policy</FooterLink>
                                <FooterLink to="#">Terms of Service</FooterLink>
                                <FooterLink to="#">Privacy Policy</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
