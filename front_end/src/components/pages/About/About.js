import React from 'react'
import Navbar from "../../Navbar/Navbar";
import {AboutStyle} from "./AboutStyle";
import Cards3 from "./Cards";
const About = () => {
    // return (
    //     <AboutStyle>
         {/*<Navbar/>*/}
        {/*<div className="container">*/}


        {/*    <h1 className="text-center" style={{paddingTop: "30%"}}>*/}
        {/*        About*/}
        {/*    </h1>*/}

        {/*</div>*/}
        {/*</AboutStyle>*/}
    // )
    return (
        <div>
            <Navbar/>
            <div className='founders' >
                <Cards3 />
            </div>
        </div>
)

}
export default About;