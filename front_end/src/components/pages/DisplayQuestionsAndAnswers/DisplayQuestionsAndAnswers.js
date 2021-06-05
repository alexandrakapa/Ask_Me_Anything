import React, {useEffect, useState} from 'react'
import Table from '@empd/reactable';
import '@empd/reactable/lib/styles.css';
import {columns} from './DisplayColumns';
import  Muitable  from "./DisplayTable";
import Navbar from "../../Navbar/Navbar";

export default function DisplayQuestionsAndAnswers() {
    const [answer, setAnswer] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/question`)
            .then(response => {
                if (response.ok){
                    return response.json()
                }
                else {
                    setData(() => [])
                    throw Error (response.statusText)
                }
            })
            .then(fetchedData => {
                setData(() => fetchedData)

                // console.log(data)
                console.log(data)
                let tmp=[]
                let i
                for (i=0; i<fetchedData[0].answers.length; i++){
                    tmp.push(fetchedData[0].answers[i])
                    console.log(fetchedData[0].answers[i])
                }
                setAnswer(() => tmp)
                console.log(answer)

            })
    }, [])



    return (
        <div>
            <Navbar/>

            <div
                style={{float:'center', marginLeft: '5%', marginRight: '5%', marginTop: '2%'}}>
                <Muitable data={data} answer={answer} tableName={"Questions display"} columns={columns} />
            </div>

        </div>
    )
}