import React from 'react'
import {HomeStyle} from './HomeStyle'
import Navbar from '../../Navbar/Navbar';
const Home = () => {
    return (

        <HomeStyle >
            <Navbar/>
        <div className="container" >

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


        </div>

            </HomeStyle>

    )
}
export default Home;