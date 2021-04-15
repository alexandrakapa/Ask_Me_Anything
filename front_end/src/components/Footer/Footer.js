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
                        <Heading>About Us</Heading>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                    </Column>
                    <Column>
                        <Heading>Project Documentation</Heading>
                    </Column>
                    <Column>
                        <Heading>Link on Github</Heading>
                    </Column>
                    <Column>
                        <Heading>Course Materials</Heading>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;