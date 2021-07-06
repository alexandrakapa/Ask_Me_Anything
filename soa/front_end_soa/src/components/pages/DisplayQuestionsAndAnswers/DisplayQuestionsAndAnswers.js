import React, {useEffect, useState} from 'react'
import '@empd/reactable/lib/styles.css';
import {columns} from './DisplayColumns';
import Navbar from "../../Navbar/Navbar";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";
import Footer from "../../Footer/Footer";
import {
    TableCell,
    TableRow
} from "@material-ui/core";



export default function DisplayQuestionsAndAnswers() {
    const [answer, setAnswer] = useState([]);
    const [data, setData] = useState([]);
    const [max_id , setMax] = useState();
    useEffect(() => {
        fetch(`http://localhost:3001/question/some_answers`)
            .then(response => response.json())
            .then(fetchedData => {
                // let max_id = fetchedData[0].question_id
                setMax(() => fetchedData[0].question_id)
                console.log("MAX",max_id)
                console.log(fetchedData[0].answers.length ===0);
                console.log("weird anwswer: "+fetchedData.length);
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
                setData(() => fetchedData)
                // console.log(data)
                let tmp=[]
                let i=0
                for (let j=0; j<fetchedData.length; j++) {
                    console.log(j);
                    // tmp[j] = []
                    let cur_arr=[]
                    i=0
                    console.log(fetchedData[j].answers.length);
                    if( fetchedData[j].answers.length ===0){
                        console.log("here");
                        cur_arr.push(0)
                    }else{
                        for(let k=0; k<fetchedData[j].answers.length;k++){
                            console.log(fetchedData[j].answers[k])
                            cur_arr.push(fetchedData[j].answers[k])
                            console.log(cur_arr)
                        }
                    }
                    console.log("tmp j: "+cur_arr);
                    // while (typeof fetchedData[j].answers[i] !== "undefined") {
                    //     tmp[j].push(fetchedData[j].answers[i])
                    //     i = i+1
                    // }
                    tmp[fetchedData[j].question_id] = cur_arr;
                }
                // console.log(fetchedData[1].answers)

                setAnswer(() => tmp)
                console.log(answer)

            })
    }, [])


    const options = {
        print: false,
        download: false,
        viewColumns: false,
        filterType: 'textField',
        selectableRows: 'none',
        expandableRows: true,
        expandableRowsHeader: false,
        expandableRowsOnClick: true,
        isRowExpandable: (dataIndex, expandedRows) => {
            // if (dataIndex === 3 || dataIndex === 4) return false;
            // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
            if (expandedRows.data.length > 8 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
            return true;
        },
        // rowsExpanded: [0, 1],

    renderExpandableRow: (rowData, rowMeta) => {
            const colSpan = rowData.length + 1;
            console.log("row: "+rowData)
            const id = rowData[0]

            return (

        <TableRow>
            <TableCell colSpan={colSpan}>
                {answer[id][0] !== 0 ?
                    answer[id].map(answers => <li key={answers.answer_id}>{answers.text}</li>)
                    :< p > No answers yet</p>
                }
            </TableCell>
        </TableRow>


            );
        },
        // onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded)
    }


    return (
        <div>
            <Navbar/>
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
                    style={{ float:'center', marginLeft: '5%', marginRight: '5%', marginTop: '2%'}}>
                    <MUIDataTable
                        title={"Here you can see questions with their answers!"}
                        data={data}
                        columns={columns}
                        options = {options}
                    />
                </div>

            </MuiThemeProvider>
            <Footer/>
        </div>

    )
}
