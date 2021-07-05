import React, {useEffect, useState} from 'react';
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import {HomeAfterLoginStyle} from "../HomeAfterLogin/HomeAfterLoginStyle";
import Footer from "../../FooterAfterLogin/Footer";

export default function HomeAfterLogin() {
    const tokf = localStorage.getItem('username');
    console.log("here")
    console.log(tokf);
    return (
        <HomeAfterLoginStyle >
            <NavbarAfterLogin/>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h2>Welcome back!</h2>
                        <h2>Feel free to interact with our website!</h2>
                    </div>
                    <div className="flip-card-back">
                        <h2>Thank you for using our website!</h2>
                        <h2>For any issues please contact us in our form!</h2>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </HomeAfterLoginStyle >
    );
}