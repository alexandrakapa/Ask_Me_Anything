import {HomeStyle} from './HomeStyle'
import Navbar from '../../Navbar/Navbar';
import {Bar, Line} from 'react-chartjs-2';

import React, { useEffect, useState} from 'react';
import Footer from "../../Footer/Footer";
import {HomeAfterLoginStyle} from "../HomeAfterLogin/HomeAfterLoginStyle";

export default function Home() {
    const [labels, setLabels] = useState([]);
    const [phrase, setPhrase] = useState([]);
    const [day, setDay] = useState([]);
    const [number, setNumber] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3002/question/statistics/byKeyword`)
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
                    newtemp.push(fetchedData[i].keyword_phrase)

                }
                setLabels(() => tmp)
                setPhrase(() => newtemp)
                // console.log(fetchedData)
            })
        //for the second diagram
        fetch(`http://localhost:3002/question/statistics/byDay`)
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                else {
                    throw Error (response.statusText)
                }
            })
            .then(fetchedData2 => {

                let tmp3=[]
                let newtemp2 = []
                let i
                for (i=0; i<fetchedData2.length; i++){
                    tmp3.push(fetchedData2[i].count)
                    // newtemp2.push(fetchedData2[i].questions_per_day.slice(0, 10))
                    let day = fetchedData2[i].questions_per_day.slice(8, 10)
                    let month = fetchedData2[i].questions_per_day.slice(5, 7)
                    let year = fetchedData2[i].questions_per_day.slice(0, 4)
                    let newdate = day.concat("-",month,"-",year)
                    newtemp2.push(newdate)
                    // console.log(newdate)

                }
                setNumber(() => tmp3)
                setDay(() => newtemp2)
                // console.log(number)
                // console.log(day)
                // console.log(fetchedData.length)
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
            <HomeStyle >
                <Navbar/>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h2>Welcome to AskMeAnything!</h2>
                            <h2>Feel free to interact with our website!</h2>
                            <p>Below are some statistics about our website:</p>
                        </div>
                        <div className="flip-card-back">
                            <h2>Get to know us:</h2>
                            <p1>AskMeAnything is a question and answer website for everyone out there having a question or knowing an answer!</p1>
                            <p1>Do you have a question but don't seem to find the answer anywhere?Then take a chance and ask here!One of our millions subscribers may know the answer!</p1>
                            <p1>Do you wanna help others?Then search for a question you know the answer to and help strangers from all over the world!</p1>
                            <p1>Subscribe NOW to AskMeAnything!Be a part of our community!</p1>
                        </div>
                    </div>
                </div>

                    <div className="boxleft">
            <label>Questions per keyword</label>
                <Bar
                    data={state}

                    options={{
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>

                <div className="boxright">
                    <label>Questions per day</label>
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
                <Footer/>
                </HomeStyle >
        );

}