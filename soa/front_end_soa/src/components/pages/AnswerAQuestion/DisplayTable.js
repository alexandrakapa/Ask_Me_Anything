import MUIDataTable from "mui-datatables";
import React from 'react';
import {
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";


function DisplayTable (props) {

    const data = props.data;
    const options = {
        // responsive: "scroll",
        selectableRows: false,
        print:false,
        download:false,
        search:false,
        filter:false,
        viewColumns:false,
        pagination: false
    };


    return (
        <div>
            <br />

            <MuiThemeProvider theme={
                createMuiTheme({
                    overrides: {
                        MUIDataTable: {
                            root: {
                                backgroundColor: '#2bbf9c',
                                width: '500px'
                            },
                        },
                        MuiToolbar: {
                            root: {
                                backgroundColor: '#a27dd0',

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

                <MUIDataTable
                    title={props.tableName}
                    data={data}
                    columns={props.columns}
                    options={options}
                />

            </MuiThemeProvider>



        </div>
    )


}


export default DisplayTable;