import React, {useEffect, useState} from 'react';
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import {ProfileStyle} from "../Profile/ProfileStyle";
import {Bar, Line} from "react-chartjs-2";
import {HomeAfterLoginStyle} from "../HomeAfterLogin/HomeAfterLoginStyle";
import Footer from "../../FooterAfterLogin/Footer";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Profile() {
    const tokf = localStorage.getItem('username');
    console.log("here")
    console.log(tokf);

    const [labels, setLabels] = useState([]);
    const [phrase, setPhrase] = useState([]);
    const [day, setDay] = useState([]);
    const [number, setNumber] = useState([]);
    const [day2, setDay2] = useState([]);
    const [number2, setNumber2] = useState([]);
    const [isloading1 ,setisloading1] = useState(0);
    const [isloading2 ,setisloading2] = useState(0);
    const [isloading3 ,setisloading3] = useState(0);
    useEffect(() => {
        let req_id = localStorage.getItem('id')
        fetch(`https://micro-statistics.herokuapp.com/question/byKeyword/${req_id}`,{headers:{'Content-type':'application/json','Authorization': 'Bearer '+localStorage.getItem('token'),}})
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                else {
                    throw Error (response.statusText)
                }
            })
            .then(fetchedData => {
                setisloading1(1)
                let tmp=[]
                let newtemp = []
                let i
                for (i=0; i<fetchedData.length; i++){
                    tmp.push(fetchedData[i].count)
                    newtemp.push(fetchedData[i].keyword_phrase)

                }
                setLabels(() => tmp)
                setPhrase(() => newtemp)
                console.log(phrase)
                console.log(labels)
            })
        //for the second diagram
        fetch(`https://micro-statistics.herokuapp.com/question/byDay/${req_id}`,{headers:{'Content-type':'application/json','Authorization': 'Bearer '+localStorage.getItem('token'),}})
            .then(response => {
                return response.json()
            })
            .then(fetchedData2 => {
                setisloading2(1)

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
        //for the third diagram
        fetch(`https://micro-display.herokuapp.com/answer/byDay/${req_id}`,{headers:{'Content-type':'application/json','Authorization': 'Bearer '+localStorage.getItem('token'),}})
            .then(response => {
                return response.json()
            })
            .then(fetchedData3 => {
                setisloading3(1)
                let tmp4=[]
                let newtemp3 = []
                let i
                for (i=0; i<fetchedData3.length; i++){
                    tmp4.push(fetchedData3[i].count)
                    let day = fetchedData3[i].answers_per_day.slice(8, 10)
                    let month = fetchedData3[i].answers_per_day.slice(5, 7)
                    let year = fetchedData3[i].answers_per_day.slice(0, 4)
                    let newdate = day.concat("-",month,"-",year)
                    newtemp3.push(newdate)

                }
                setNumber2(() => tmp4)
                setDay2(() => newtemp3)
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

    const state3 = {
        labels: day2,
        datasets: [
            {
                label: 'Statistics for answers per day',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgb(59,215,124)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: number2
            }
        ]
    }

    return (
        <ProfileStyle >
            <NavbarAfterLogin/>
            <h1>My contributions</h1>

            <div className="boxleft">
                <label>My Questions per day</label>
                {isloading2 ?
                <Line
                    data={state2}
                    options={{
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />:<CircularProgress color="secondary"/>}
                <br/>
                <br/>
            </div>

            <div className="boxright">
                <label>My Answers per day</label>
                {isloading3?
                <Line
                    data={state3}
                    options={{
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />:<CircularProgress color="secondary"/>}
                <br/>
                <br/>
            </div>
            <div className="boxmiddle">
                <label>My Questions per keyword</label>
                {isloading1?
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
                />:
                    <CircularProgress color="secondary"/>}
            </div>
            <Footer/>
        </ProfileStyle >
    );
}