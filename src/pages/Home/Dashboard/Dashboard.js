import { Box, Typography } from '@mui/material'
import React from 'react'
// import { IP } from '../../../ip/IP'
import { useState } from 'react'
import { useEffect } from 'react'
import { DashboardCss } from './DashboardCss'

const Dashboard = () => {
    const [visibility, setVisibility] = useState('false')
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [severity, setSeverity] = useState('')
    const [snackBarMessage, setSnackBarMessage] = useState('')
    const handleCloseSnackBar = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    }

    // const [rstwTotalParticipants, setRstwTotalParticipants] = useState(0)

    // get all rstw participants
    const getAllRstwParticipants = () => {
        // fetch(IP.protocol + '://' + IP.address + ':' + IP.db_port + '/attendance/count/total',
        //     {
        //         method: 'GET',
        //     }
        // )
        // .then(function(response){
        //     return response.json()
        // })
        // .then(function(response){
        //     if(response.result == 'true'){
        //         setRstwTotalParticipants(response.total[0].count)
        //     }
        // })
        // .catch(function(err){
        //     setOpenSnackBar(true);
        //     setSeverity('error');
        //     setSnackBarMessage(err.message)
        //     setVisibility('false')
        // })
    }

    useEffect(() => {
        // setInterval(getAllRstwParticipants,10000)
    },[])
    return (
        <Box sx={DashboardCss.wrapper}>
            <Box sx={DashboardCss.mainContainer}>
                <Typography sx={DashboardCss.label}>
                    WELCOME TO OCD DASHBOARD SYSTEM
                </Typography>
            </Box>
        </Box>
    )
}

export default Dashboard
