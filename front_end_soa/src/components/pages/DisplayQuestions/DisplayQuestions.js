import React, {useEffect, useState} from 'react'
import {DisplayQuestionsStyle} from "../DisplayQuestions/DisplayQuestionsStyle";
import Footer from '../../FooterAfterLogin/Footer'
import NavbarAfterLogin from '../../NavbarAfterLogin/NavbarAfterLogin';
import {withRouter} from "react-router-dom";
import {columns} from './DisplayColumns';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";



function DisplayQuestions(props)  {

    const [question, setQuestion] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:3001/question/andanswers`,{
            // headers:{'Content-type':'application/json'}
        })
            .then(response => response.json())
            .then(fetchedData => {
                for (let i=0; i<fetchedData.length; i++) {
                    let date;
                    date=fetchedData[i].askedOn
                    date = date.split("T")
                    let date2;
                    date2 = date[1].split(".")
                    let cut;
                    cut = date[0].concat(" ",date2[0])
                    fetchedData[i].askedOn = cut
                }
                setQuestion(() => fetchedData)
                console.log(fetchedData)
            })

    },[])


    const options = {
        print: false,
        download: false,
        viewColumns: false,
        filterType: 'textField',
        selectableRows: 'none',
        onRowClick: (cellIndex, rowIndex,colData) => {
            console.log(cellIndex[0]);
            props.history.push({
                pathname: '/answer_a_question',
                state: { question_id: cellIndex[0]}
            })
            fetch(`http://localhost:3001/question/byId/${cellIndex[0]}`, {
                method: 'POST',
                headers: {
                    // 'Accept': 'application/json',
                    'Content-type':'application/json',
                    // 'x-access-token':tok
                },


            })
        }
    }


    return (
<DisplayQuestionsStyle>

                     <NavbarAfterLogin/>

            <MuiThemeProvider theme={
                createMuiTheme({
                    overrides: {
                        MUIDataTable: {
                            root: {
                                backgroundColor: '#2bbf9c',
                                width: '500px',
                            },
                        },
                        MuiToolbar: {
                            root: {
                                backgroundColor: '#a27dd0'
                            }

                        },
                        MUIDataTableSelectCell: {
                            root: {
                                backgroundColor: '#a27dd0'
                            },
                            headerCell: {
                                backgroundColor: '#a27dd0',
                            },
                            expandDisabled: {
                                // Soft hide the button.
                                visibility: 'hidden',
                            },
                        },
                        MUIDataTableBodyCell: {
                            headerCell: {
                                backgroundColor: '#6700bd',
                            },
                        },
                        MUIDataTableHeadCell: {
                            root: {
                                borderBottom : '1px solid black',
                                borderColor : 'black',
                            },
                            fixedHeader: {
                                position: 'sticky',
                                top: '0px',
                                zIndex: 100,
                                backgroundColor: '#9ed9ba',
                                borderColor : 'black'

                            },
                        },
                        MuiTableFooter: {
                            root: {
                                '& .MuiToolbar-root': {
                                    backgroundColor: '#a27dd0'
                                },
                            },
                        },
                    },
                })
            }>
            <div
                style={{ marginLeft: '5%', marginRight: '5%', marginTop: '2%', marginBottom: '2%', padding:'2px'}}>
            <MUIDataTable
                title={"Please click on a question to answer it!"}
                data={question}
                columns={columns}
                options = {options}
            />
            </div>

            </MuiThemeProvider>
            <Footer/>
            </DisplayQuestionsStyle>

            )
}
export default withRouter(DisplayQuestions)