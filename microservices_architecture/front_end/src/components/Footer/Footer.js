import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    // Heading,
} from "./FooterStyle";
// import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <FooterLink href="/about">
                            <i
                                className="far fa-address-book">
                            </i>
                            About Us
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="/contact">
                            <i
                                className="fas fa-phone">
                            </i>
                            Contact Us
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="/testimonial">
                            <i
                                className="far fa-copy">
                            </i>
                            Project Documentation
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="https://github.com/alexandrakapa/Saas-19_Q2D">
                            <i
                                className="fab fa-github">
                            </i>
                            Link on Github
                        </FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="https://courses.pclab.ece.ntua.gr/course/view.php?id=34">
                            <i
                                className="fas fa-link">
                            </i>
                            Course Materials
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;