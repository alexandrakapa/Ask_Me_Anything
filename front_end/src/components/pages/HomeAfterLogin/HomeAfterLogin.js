import React from 'react';
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import {HomeAfterLoginStyle} from "../HomeAfterLogin/HomeAfterLoginStyle";

export default function HomeAfterLogin() {
    const tokf = localStorage.getItem('username');
    console.log("here")
    console.log(tokf);

    return (

        <HomeAfterLoginStyle>
            <NavbarAfterLogin/>
            <div className="container">

                <h1>Welcome to AskMeAnything</h1>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3>Questions per keyword</h3>
                            <p>graph/table</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3> Questions per day/period</h3>
                            <p>graph/table</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Ask a new question</h3>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h3>Answer a question</h3>
                        </div>
                    </div>
                </div>
            <br/>
            <br/>

            </div>

        </HomeAfterLoginStyle>);
}