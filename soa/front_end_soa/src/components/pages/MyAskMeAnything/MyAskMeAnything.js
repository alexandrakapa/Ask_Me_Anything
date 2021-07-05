import React from 'react'
import {MyAskMeAnythingStyle} from './MyAskMeAnythingStyle'
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';

const MyAskMeAnything = () => {
    return (
        <MyAskMeAnythingStyle>
            <NavbarAfterLogin/>
        <div className="container">

            <h1>My AskMeAnything</h1>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <h3>My questions</h3>
                        <h3>My answers</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3> My contributions per day</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                       <h3 >Ask a new question</h3>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <h3>Answer a question</h3>
                    </div>
                </div>
            </div>


        </div>

            </MyAskMeAnythingStyle>
    )
}
export default MyAskMeAnything;