import React, { useEffect, useState } from 'react'
import Table from '../../Table'
import { RootCss } from '../../../../rootCss/RootCss'
import BasicMenu from '../../../BasicMenu/BasicMenu'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Box } from '@mui/material';
import { DynamicTablesCss } from '../DynamicTablesCss';
import VisitorViewDetails from '../../../../pages/Home/Visitors/VisitorViewDetails';
import VisitorManageForm from '../../../../pages/Home/Visitors/VisitorManageForm';
import VisitorPrintID from '../../../../pages/Home/Visitors/VisitorPrintID';
import VisitorIDmodal from '../../../../pages/Home/Visitors/VisitorIDmodal';
import html2canvas from 'html2canvas'
import printJS from 'print-js'
import { VisitorsCss } from '../../../../pages/Home/Visitors/VisitorsCss';
import VisitorID from '../../../../pages/Home/Visitors/VisitorID';

const UsersTable = ({
    showUsers,
    json
}) => {
    // image of qr id rendered for display and download and print
    const [qrIDforDisplayAction, setQrIDforDisplayAction] = useState(null);

    // qr id properties
    const [uuidAction, setUuidAction] = useState('');
    const [firstNameAction, setFirstNameAction] = useState('');
    const [middleNameAction, setMiddleNameAction] = useState('');
    const [lastNameAction, setLastNameAction] = useState('');
    const [transformScaleAction, setTransformScaleAction] = useState('1');

    // id modal handling for download or print
    const [previewIDmodalOpenAction, setPreviewIDmodalOpenAction] = useState(false);

    const handleClosePreviewIDmodalAction = () => {
        setPreviewIDmodalOpenAction(false)
        setUuidAction('')
        setFirstNameAction('')
        setMiddleNameAction('')
        setTransformScaleAction('')
    }

    const openPreviewIDmodalAction = () => {
        setPreviewIDmodalOpenAction(true)
    }

    // manageUsers FormHandlers
    const [openManageUsers, setOpenManageUsers] = useState(false)
    const handleCloseManageUsers = () => {
        setOpenManageUsers(false)
    }
    const openManageUsersForm = () => {
        setOpenManageUsers(true)
    }

    // view users FormHandlers
    const [openViewUsers, setOpenViewUsers] = useState(false)
    const handleCloseViewUsers = () => {
        setOpenViewUsers(false)
    }
    const openViewUsersForm = () => {
        setOpenViewUsers(true)
    }

    // print id FormHandlers
    const [openPrintID, setOpenPrintID] = useState(false)
    const handleClosePrintID = () => {
        setOpenPrintID(false)
    }
    const openPrintIDForm = () => {
        setOpenPrintID(true)
    }

    // users details to pass to edit form
    const [params, setParams] = useState([])

    // print qr displayed
    const printFunction = () => {
        var hiddenIDforPrint = document.getElementById('hiddenIDforPrintAction')
        hiddenIDforPrint.style.display = 'block'
        printJS({
            // printable: 'qrID',
            printable: 'hiddenIDforPrintAction',
            type: 'html',
            scanStyles: false,
        })
        hiddenIDforPrint.style.display = 'none'
    }

    const userMenu = (params) => {
        return (
            <Box>
                <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        openViewUsersForm()
                        setParams(params.row)
                    }}
                >
                    View More Details
                </Box>
                <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        openManageUsersForm()
                        setParams(params.row)
                    }}
                >
                    Manage User Details
                </Box>
                <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        setUuidAction(params.row.uuid)
                        setFirstNameAction(params.row.firstname)
                        setMiddleNameAction(params.row.middlename)
                        setLastNameAction(params.row.lastname)
                        setParams(params.row)
                    }}
                >
                    Print ID
                </Box>
                <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        // openPrintIDForm()
                        // setParams(params.row)
                    }}
                >
                    Send ID
                </Box>
                {/* <Box 
                    sx={DynamicTablesCss.menu}
                    onClick = {() => {
                        openResetPasswordForm()
                        setParams(params.row)
                    }}
                >
                    Reset Password
                </Box> */}
            </Box>
        )
    }

    // column fields of users table
    const columns = [
        { field: 'uuid', headerName: 'UUID', width: 150},
        { field: 'visitor_id', headerName: 'Visitor ID', width: 150},
        { field: 'fullname', headerName: 'Name', flex: 1},
        { field: 'sex', headerName: 'Sex', flex: 1},
        { field: 'age', headerName: 'Age', width: 150},
        // { field: 'birth_day', headerName: 'Birthday', flex: 1},
        { field: 'sector', headerName: 'Sector', flex: 1},
        { field: 'is_pwd', headerName: 'PWD?', width: 80},
        { field: 'is_indigenous', headerName: 'IP?', width: 80},
        { field: 'is_4ps', headerName: '4Ps?', width: 80},
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
                                    userMenu(params)
                                }
                            />
                        </div>
                    </div>
                )
            }
        }
    ]
    
     // generate ID
     const generateID = async () => {
        const idtemplate = document.getElementById('qrIDAction')
        document.getElementById('qrIDmodalAction').style.display = 'flex'
        const canvas = await html2canvas(idtemplate)
        const dataURL = canvas.toDataURL('image/png')
        setQrIDforDisplayAction(dataURL)
        document.getElementById('qrIDmodalAction').style.display = 'none'

        // will open the modal where ID can be printed/donwloaded
        openPreviewIDmodalAction()
    }

    // will triggered after successfully clicking action button
    // and dynamically set the ID details
    useEffect(() => {
        if(uuidAction !== '' && firstNameAction !== '' && lastNameAction !== ''){
            generateID();
        }
    },[uuidAction,firstNameAction,middleNameAction,lastNameAction]);

    useEffect(() => {
        showUsers()
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
            <VisitorViewDetails
                open={openViewUsers}
                handleClose={handleCloseViewUsers}
                params = {params}
            />
            <VisitorManageForm
                open={openManageUsers}
                handleClose={handleCloseManageUsers}
                showUsers = {showUsers}
                params = {params}
            />
             <Box 
                id="hiddenIDforPrintAction"
                style={{
                    display: 'none'
                }}
            >
                <Box
                    component = 'img'
                    src={qrIDforDisplayAction}
                />
            </Box>
            <Box 
                sx={VisitorsCss.qrIDmodal}
                id="qrIDmodalAction"
                style={{
                    display: 'none',
                    // visibility: 'hidden'
                }}
            >
                <Box
                    id="qrIDAction"
                    style={{
                        padding: '20px',
                        // margin: 'auto',
                        // border: 'solid 1px red',
                        boxSizing: 'border-box'
                    }}
                >
                    <VisitorID
                        uuid = {uuidAction}
                        firstName = {firstNameAction}
                        middleName = {middleNameAction}
                        lastName = {lastNameAction}
                        params = {params}
                        transformScale = {transformScaleAction}
                    />
                </Box>
            </Box>
            <VisitorIDmodal
                open={previewIDmodalOpenAction}
                handleClose={handleClosePreviewIDmodalAction}
                qrID={qrIDforDisplayAction}
                printFunction = {printFunction}
            />
            {/* <VisitorPrintID
                open={openPrintID}
                handleClose={handleClosePrintID}
                params = {params}
            /> */}
        </>
    )
}

export default UsersTable
