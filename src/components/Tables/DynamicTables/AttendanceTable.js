import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IP } from '../../../ip/IP'
import BasicSnackBar from '../../BasicSnackbar/BasicSnackBar'
import FilledButton from '../../Buttons/FilledButton/FilledButton'
import Table from '../Table'
import CachedIcon from '@mui/icons-material/Cached';
import { RootCss } from '../../../rootCss/RootCss'

const AttendanceTable = ({
    showAttendance,
    json,
}) => {

    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [severity, setSeverity] = useState('')
    const [snackBarMessage, setSnackBarMessage] = useState('')
    const handleCloseSnackBar = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    }

    // column fields of attendance table
    const columns = [
        // { field: 'firstName', headerName: 'First Name', flex: 1 },
        // { field: 'lastName', headerName: 'Last Name', flex: 1 },
        { field: 'fullName', headerName: 'Name', flex: 1, minWidth: 250},
        { field: 'amIN', headerName: 'AM IN', flex: 1, sortable: false },
        { field: 'amOUT', headerName: 'AM OUT', flex: 1, sortable: false },
        { field: 'pmIN', headerName: 'PM IN', flex: 1, sortable: false },
        { field: 'pmOUT', headerName: 'PM OUT', flex: 1, sortable: false },
    ]

    useEffect(() => {
        showAttendance()
    },[])

    return (
        <>
            <Box sx={{
                // border: 'solid 1px black',
                height: '100%',
            }}>
                {/* <Box sx={{
                    padding: '0px 0px 10px 0px',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <FilledButton
                        title='Reset'
                        onClick={() => {
                            showAttendance()
                        }}
                        startIcon={
                            <CachedIcon/>
                        }
                        backgroundColor={RootCss.colors.primaryColor}
                        backgroundColorHover={RootCss.colors.primaryColorHover}
                        fontFamily={RootCss.fonts.mainFont}
                        fontSize='18px'
                        fontWeight='bold'
                        disableElevation={true}
                    />
                </Box> */}
                <Box sx={{
                    // border: 'solid 1px black',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0px 0px 10px 0px'
                }}>
                    <Typography
                        sx={{
                            fontFamily: `${RootCss.fonts.mainFont}`,
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}
                    >
                        Daily Attendance
                    </Typography>
                </Box>
                <Table
                    rows={
                        json
                    //     [
                    //         {
                    //             "id": '1',
                    //             "firstName":'Christian Leonell',
                    //             "lastName":"Torres",
                    //             "amIN":"testma,e",
                    //             "amOUT":"testphone",
                    //             "pmIN":"testemail",
                    //             "pmOUT":"testemail"
                    //         },
                    //     ]
                    }
                    columns={columns}
                    // loading={!json.length}
                    onError={() => {

                    }}
                    sx={{
                        minHeight: '100%',
                        zIndex: '10'
                    }}
                />
            </Box>
            <BasicSnackBar
                open={openSnackBar}
                severity={severity}
                message={snackBarMessage}
                onClose={handleCloseSnackBar}
            />
        </>
    )
}

export default AttendanceTable