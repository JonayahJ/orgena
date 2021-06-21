import React from 'react'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from "./FooterElements"
import {
    FaFacebook,
    FaGooglePlusG,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* About */}
                        <FooterLinkItems>
                            <FooterLinkTitle>About</FooterLinkTitle>
                                <FooterLink to="/about-us">About Us</FooterLink>
                                <FooterLink to="/consultants">Consultants</FooterLink>
                                <FooterLink to="/services">Services</FooterLink>
                                <FooterLink to="/testimonials">Testimonials</FooterLink>
                        </FooterLinkItems>
                        {/* Contact */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to="/schedule">Book Consultation</FooterLink>
                                <FooterLink to="/contact">Contact Us</FooterLink>
                                <a href="mailto:support@orgenaconsulting.com" className="footerLink">Email Us</a>
                                <a href="tel:1234567890" className="footerLink">+1 (123)456-7890</a>
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
                                <FooterLink to="/cookies">Cookie Policy</FooterLink>
                                <FooterLink to="/terms">Terms of Service</FooterLink>
                                <FooterLink to="/privacy">Privacy Policy</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <img src="logo_white.png" height="100px" width="auto" alt="Orgena Consulting logo" />
                        </SocialLogo>
                        <WebsiteRights>
                            Orgena Consulting © 2020 - {new Date().getFullYear()}.  All rights reserved. 
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" rel="noopenner noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" rel="noopenner noreferrer" aria-label="Google+">
                                <FaGooglePlusG />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" rel="noopenner noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" rel="noopenner noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
