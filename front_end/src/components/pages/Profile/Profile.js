import React, {useEffect, useState} from 'react';
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import {ProfileStyle} from "../Profile/ProfileStyle";
import {Bar, Line} from "react-chartjs-2";
// import cubejs from "@cubejs-client/core";
// import { CubeProvider, useCubeQuery } from "@cubejs-client/react";
// import "chartjs-plugin-colorschemes";
// import { RdPu4 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer";
//
// import moment from "moment";

export default function Profile() {
    const tokf = localStorage.getItem('username');
    console.log("here")
    console.log(tokf);

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
    //for the third diagram
    // const { resultSet } = useCubeQuery({
    //     measures: ["Orders.count"],
    //     dimensions: ["ProductCategories.name"],
    //     filters: [
    //         {
    //             member: "ProductCategories.name",
    //             operator: "equals",
    //             values: ["Beauty", "Clothing", "Computers", "Electronics"]
    //         }
    //     ],
    //     timeDimensions: [
    //         {
    //             dimension: "Orders.createdAt",
    //             granularity: "month",
    //             dateRange: "last 6 month"
    //         }
    //     ]
    // });



    //Transform data for visualization
    // const labelss = resultSet
    //     .seriesNames({
    //         x: [],
    //         y: ["Orders.createdAt"]
    //     })
    //     .map((column) => moment(column.yValues[0]).format("MMMM"));
    //
    // const datasets = resultSet.series().map((item, i) => {
    //     return {
    //         label: item.title,
    //         data: item.series.map((item) => item.value)
    //     };
    // });


    return (
        <ProfileStyle >
            <NavbarAfterLogin/>
            <div className="boxleft">
                <label>My Questions per keyword</label>
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

            {/*<div className="boxright">*/}
            {/*    <label>My Questions per day</label>*/}
            {/*    <Line*/}
            {/*        data={state2}*/}
            {/*        options={{*/}
            {/*            legend:{*/}
            {/*                display:true,*/}
            {/*                position:'right'*/}
            {/*            }*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    <br/>*/}
            {/*    <br/>*/}

            {/*</div>*/}

            {/*<div className="boxright">*/}
            {/*<Bar*/}
            {/*    data={{*/}
            {/*        labelss,*/}
            {/*        datasets*/}
            {/*    }}*/}
            {/*    options={{*/}
            {/*        legend: {*/}
            {/*            position: "bottom",*/}
            {/*            align: "start"*/}
            {/*        },*/}
            {/*        plugins: {*/}
            {/*            colorschemes: {*/}
            {/*                scheme: RdPu4*/}
            {/*            }*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
            {/*</div>*/}

        </ProfileStyle >
    );
}