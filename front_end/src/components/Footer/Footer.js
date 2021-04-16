import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <FooterLink href="#">About Us</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Contact Us</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Project Documentation</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Link on Github</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Course Materials</FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;