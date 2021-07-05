import React from 'react'
import Navbar from "../../Navbar/Navbar";
import {AboutStyle} from "./AboutStyle";
import Footer from "../../Footer/Footer";
const About = () => {
    return (
        <AboutStyle>
            <Navbar/>
            <h1>About us</h1>
        <div className="card-group">
            <div className="card">
                <img src="https://avatars.githubusercontent.com/u/63066416?s=400&u=9882a916d8333baae752b808c4c9828108876db7&v=4" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Alexandra Kaparou</h5>
                        <p className="card-text">Studies at ECE NTUA at 8th semester </p>
                        <a href="https://github.com/alexandrakapa" className="btn btn-primary">Visit github page</a>
                    </div>
            </div>
            <div className="card">
                <img src="https://avatars.githubusercontent.com/u/45352904?s=400&u=cf815953b4cef9819e16deeabac8859690afbbff&v=4" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Nikos Giorgoulakis</h5>
                        <p className="card-text">Studies at ECE NTUA at 8th semester</p>
                        <a href="https://github.com/nikosgio" className="btn btn-primary">Visit github page</a>
                    </div>
            </div>
        </div>
<br/>
            <Footer/>
        </AboutStyle>
)

}
export default About;