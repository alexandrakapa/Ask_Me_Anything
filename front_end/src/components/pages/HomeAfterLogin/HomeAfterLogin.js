import React, {useEffect, useState} from 'react';
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import {HomeAfterLoginStyle} from "../HomeAfterLogin/HomeAfterLoginStyle";
import {HomeStyle} from "../Home/HomeStyle";
import Navbar from "../../Navbar/Navbar";
import {Bar, Line} from "react-chartjs-2";

export default function HomeAfterLogin() {
    const tokf = localStorage.getItem('username');
    console.log("here")
    console.log(tokf);

    // return (
    //
    //     <HomeAfterLoginStyle>
    //         <NavbarAfterLogin/>
    //         <div className="container">
    //
    //             <h1>Welcome to AskMeAnything</h1>
    //
    //             <div className="row">
    //                 <div className="column">
    //                     <div className="card">
    //                         <h3>Questions per keyword</h3>
    //                         <p>graph/table</p>
    //                     </div>
    //                 </div>
    //                 <div className="column">
    //                     <div className="card">
    //                         <h3> Questions per day/period</h3>
    //                         <p>graph/table</p>
    //                     </div>
    //                 </div>
    //                 <div className="column">
    //                     <div className="card">
    //                         <h3>Ask a new question</h3>
    //                     </div>
    //                 </div>
    //                 <div className="column">
    //                     <div className="card">
    //                         <h3>Answer a question</h3>
    //                     </div>
    //                 </div>
    //             </div>
    //         <br/>
    //         <br/>
    //
    //         </div>
    //
    //     </HomeAfterLoginStyle>);


    const [labels, setLabels] = useState([]);
    const [phrase, setPhrase] = useState([]);
    const [day, setDay] = useState([]);
    const [number, setNumber] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/question/byKeyword/6`)
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                else {
                    throw Error (response.statusText)
                }
            })
            .then(fetchedData => {

                let tmp=[]
                let newtemp = []
                let i
                for (i=0; i<fetchedData.length; i++){
                    tmp.push(fetchedData[i].count)
                    newtemp.push(fetchedData[i].Keyword_phrase)

                }
                setLabels(() => tmp)
                setPhrase(() => newtemp)
            })
        //for the second diagram
        fetch(`http://localhost:3001/question/byDay/6`)
            .then(response => {
                    return response.json()
            })
            .then(fetchedData2 => {

                let tmp3=[]
                let newtemp2 = []
                let i
                for (i=0; i<fetchedData2.length; i++){
                    tmp3.push(fetchedData2[i].count)
                    let day = fetchedData2[i].questions_per_day.slice(8, 10)
                    let month = fetchedData2[i].questions_per_day.slice(5, 7)
                    let year = fetchedData2[i].questions_per_day.slice(0, 4)
                    let newdate = day.concat("-",month,"-",year)
                    newtemp2.push(newdate)

                }
                setNumber(() => tmp3)
                setDay(() => newtemp2)
            })
    }, [])

    const state = {
        labels: phrase,
        datasets: [
            {
                label: 'Statistics per keyword',
                backgroundColor: 'rgb(39,198,131)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data : labels
            }
        ]
    }


    const state2 = {
        labels: day,
        datasets: [
            {
                label: 'Statistics per day',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgb(59,215,124)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: number
            }
        ]
    }


    return (
        <HomeAfterLoginStyle >
            <NavbarAfterLogin/>
            <div className="boxleft">
                <label>My Questions per keyword</label>
                <Bar
                    data={state}

                    options={{
                        title:{
                            display:true,
                            text:'Average',
                            fontSize:50
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>

            <div className="boxright">
                <label>My Questions per day</label>
                <Line
                    data={state2}
                    options={{
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
                <br/>
                <br/>
                <br/>
                <br/>

            </div>

        </HomeAfterLoginStyle >
    );
}