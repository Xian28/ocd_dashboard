import React, { useEffect, useState } from 'react'
import Table from '../../Table'
import { RootCss } from '../../../../rootCss/RootCss'
import BasicMenu from '../../../BasicMenu/BasicMenu'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { DynamicTablesCss } from '../DynamicTablesCss';
import { Box } from '@mui/material';
import BasicSnackbar from '../../../BasicSnackbar/BasicSnackBar';
import { Cookie } from '@mui/icons-material';
import Cookies from 'js-cookie';

const DisasterTable = ({
    showDisasters,
    json
}) => {
    // handling snackbar
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

    // column fields of events table
    const columns = [
        { field: 'province', headerName: 'Province', flex: 1},
        // { field: 'username', headerName: 'Username', flex: 1},
        { field: 'city', headerName: 'City', flex: 1},
        { field: 'barangay', headerName: 'Barangay', flex: 1},
        { field: 'family', headerName: 'Family', flex: 1},
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                        display: 'flex',
                        flexGrow: '1',
                        padding: '0px 10px',
                        justifyContent: 'space-between',
                        }}
                    >
                        <div
                            style={{ 
                                cursor: "pointer", 
                                color: `${RootCss.colors.adminPrimaryColor}`
                            }}
                        >
                            <BasicMenu
                                button = {
                                    <>
                                        <MoreHorizOutlinedIcon index={params.row.id} />
                                    </>
                                    
                                }
                                menu = {
                                    eventMenu(params)
                                }
                            />
                        </div>
                    </div>
                )
            }
        }
    ]

    // users details to pass to edit form
    const [params, setParams] = useState([])

    const eventMenu = (params) => {
        return (
            <Box>
                <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        // openManageEventsForm()
                        if(Cookies.get().token )
                        setParams(params.row)
                    }}
                >
                    Manage Disaster Details
                </Box>
                {/* <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        // openChangePasswordForm()
                        setParams(params.row)
                    }}
                >
                    Change Password
                </Box> */}
            </Box>
        )
    }

    useEffect(() => {
        showDisasters()
    },[])

    return (
        <>
            <Table
                rows={
                    json
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
            <BasicSnackbar
                open={openSnackBar}
                severity={severity}
                message={snackBarMessage}
                onClose={handleCloseSnackBar}
                fontSize='14px'
            />
            {/* <EventManageForm
                open={openManageEvents}
                handleClose={handleCloseManageEvents}
                showEvents = {showEvents}
                params = {params}
            />
            <EventChangePassword
                open={openChangePassword}
                handleClose={handleCloseChangePassword}
                showEvents = {showEvents}
                params={params}
            /> */}
        </>
    )
}

export default DisasterTable
