import React, {useEffect, useState} from 'react'
// import Table from '@empd/reactable';
import '@empd/reactable/lib/styles.css';
import {columns} from './ContactColumns';
import  Muitable  from "./MuidataTable";
import NavbarAfterLogin from "../../NavbarAfterLogin/NavbarAfterLogin";
// const Contact = () => {
//     return (
//         <div className="container">
//
//             <h1 className="text-center" style={{paddingTop: "30%"}}>
//                 Contact Us
//             </h1>
//
//         </div>
//     )
//
// }
// export default Contact;

export default function Contact() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [answer, setAnswer] = useState([]);
    // const [general, setGeneral] = useState([])
    const [data, setData] = useState([])

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(`http://localhost:3000/answer`)
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
                // setAnswer(() => fetchedData)
                // console.log(answers)
                // console.log("okrr")
                // setAnswers(fetchedData)
                // console.log(fetchedData)
                console.log(data)
                // console.log("hree")
                // let tmp=[]
                // let i
                // for (i=0; i<fetchedData.length; i++){
                //     tmp.push(fetchedData[i])
                // }
                // setGeneral(() => tmp)
                // console.log(tmp)
            })
    }, [])

    // function checkBig(){
    //     console.log("lolll")
    // }


    return (
        <div>
            <NavbarAfterLogin/>


        {/*<Table*/}
        {/*    columns={[{*/}
        {/*        name: 'answer_id',*/}
        {/*        selector: 'name',*/}
        {/*        className: 'w-50',*/}
        {/*        sortable: true,*/}
        {/*        search: true*/}
        {/*    },*/}
        {/*    {*/}
        {/*        name: 'text',*/}
        {/*        selector: 'description',*/}
        {/*        sortable: true,*/}
        {/*        search: true},*/}
        {/*    {*/}
        {/*        name: 'answeredOn',*/}
        {/*        selector: 'answeredOn',*/}
        {/*        sortable: true,*/}
        {/*        search: true},*/}
        {/*    {*/}
        {/*        name: 'answeredFrom',*/}
        {/*        selector: 'answeredFrom',*/}
        {/*        sortable: true,*/}
        {/*        search: true}*/}
        {/*        ]}*/}

        {/*    data={general*/}

        {/*    // {name: answer[0].answer_id,description: answer[0].text, answeredOn: answer[0].answeredOn, answeredFrom: answer[0].answeredFrom},*/}
        {/*    // {name: answer[1].answer_id,description: answer[1].text, answeredOn: answer[1].answeredOn, answeredFrom: answer[1].answeredFrom},*/}
        {/*    // {name: answer[2].answer_id,description: answer[2].text, answeredOn: answer[2].answeredOn, answeredFrom: answer[2].answeredFrom}*/}
        {/*    }*/}
        {/*    pageOptions = {[30,2,1]} />*/}
        {/*    /!*header={<div />}*!/*/}
        {/*    /!*<label>{checkBig()}</label>*!/*/}

            <div
                style={{float:'center', marginLeft: '5%', marginRight: '5%', marginTop: '2%'}}>
                <Muitable data={data} tableName={"Answers display"} columns={columns} />
            </div>

        </div>
    )
}
