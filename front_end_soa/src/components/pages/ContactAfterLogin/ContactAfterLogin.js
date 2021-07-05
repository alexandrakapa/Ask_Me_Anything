import React from 'react'
import '@empd/reactable/lib/styles.css';
import NavbarAfterLogin from "../../NavbarAfterLogin/NavbarAfterLogin";
import Footer from "../../Footer/Footer";
import {ContactAfterLoginStyle} from "./ContactAfterLoginStyle";
import {Form} from "react-bootstrap";

function ContactUs(props) {


    return (
        <ContactAfterLoginStyle>
            <NavbarAfterLogin/>
            <h2>For any issues please contact us!</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your text</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter your text"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I would like to receive emails from this website" />
                </Form.Group>
                <button class="btn btn-primary" type="submit">
                    Submit
                </button>
            </Form>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </ContactAfterLoginStyle>



    )
}
export default ContactUs;