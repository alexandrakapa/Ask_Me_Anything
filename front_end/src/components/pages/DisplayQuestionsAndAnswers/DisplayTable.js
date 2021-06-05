import MUIDataTable from "mui-datatables";
import React from 'react';
import {
    createMuiTheme,
    MuiThemeProvider,
} from "@material-ui/core/styles";
import {TableCell, TableRow} from "@material-ui/core";
import ExpandButton from "./ExpandButton";


function DisplayTable (props) {

    const data = props.data;
    const ans = props.answer;
    console.log("aim")
    console.log(ans[1])
    const options = {
        // filterType: "checkbox",
        filterType: "dropdown",
        filter:true,
        // responsive: "scroll",
        rowsPerPage: 10,
        selectableRows: true,
        print:false,
        download:false,
        expandableRows: true,
        expandableRowsHeader: false,
        expandableRowsOnClick: true,
        isRowExpandable: (dataIndex, expandedRows) => {
            if (dataIndex === 3 || dataIndex === 4) return false;

            // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
            if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
            return true;
        },
        rowsExpanded: [0, 1],
        renderExpandableRow: (rowData, rowMeta) => {
            const colSpan = rowData.length+1;
            // console.log(rowData);
            // console.log("here")
            // console.log(rowMeta)
            return (
                <TableRow>
                    <TableCell colSpan={colSpan}>
                        {/*{JSON.stringify(rowData)}*/}
                        {rowData}
                    </TableCell>
                </TableRow>
                    );
        },
        onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded)
    };


    const components = {
        ExpandButton: function(props) {
            if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{width:'24px'}} />;
            return <ExpandButton {...props} />;
        }
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
                                    backgroundColor: '#a27dd0',
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
                    components={components}
                />

            </MuiThemeProvider>



        </div>
    )


}


export default DisplayTable;