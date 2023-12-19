import React from 'react'
import { Box, Typography, Tooltip, Avatar } from '@mui/material'
import { HomeMainCss } from './HomeMainCss'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { RootCss } from '../../../rootCss/RootCss';
import { useEffect } from 'react';
// import { IP } from '../../../ip/IP';
import ocdLogo from '../../../assets/ui/ocd logo.png'
import BasicMenu from '../../../components/BasicMenu/BasicMenu';
import HomeMenu from './HomeMenu';
import BasicSnackbar from '../../../components/BasicSnackbar/BasicSnackBar';
import Loader from '../../../components/Loader/Loader';
import HomeSidebar from './HomeSidebar';

const HomeMain = () => {
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

    // form handler for change password
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const openChangePasswordForm = () => {
        setOpen(true)
    }

    const navigate = useNavigate()

    const location = useLocation();

    const [employeeName, setEmployeeName] = useState('')

    const [sidebarLength, setSidebarLength] = useState('250px')

    const [pageTitle, setPageTitle] = useState('')

    const minimizeSidebar = () => {
        var sidebar = document.getElementById('sidebar')
        if(sidebarLength == '250px'){
            setSidebarLength('40px')
            sidebar.style.width = '40px'
        }
        else if(sidebarLength == '40px'){
            setSidebarLength('250px')
            sidebar.style.width = '250px'
        }
    }

    const selectMenu = (menu) => {
        var menu = menu.toLowerCase()
        var sidebarMenus = document.getElementsByClassName('sidebarMenus')
        for(var i = 0; i < sidebarMenus.length; i++){
            sidebarMenus[i].style.background = 'transparent'
        }
        if(menu == 'dashboard' || menu == '' || menu == 'home'){
            menu = 'dashboard'
            setPageTitle('Dashboard')
        }
        else if(menu == 'regional'){
            setPageTitle('Regional Reports')
        }
        // else if(menu == 'visitors'){
        //     setPageTitle('Visitors')
        // }
        // else if(menu == 'events'){
        //     setPageTitle('Events')
        // }
        // else if(menu == 'attendance'){
        //     setPageTitle('Attendance')
        // }
        else{
            setPageTitle('')
        }
        var selected = document.getElementById(menu)
        if(selected){
            selected.style.background = `${RootCss.colors.primaryColor}`
        }
        navigate(menu)
    }


    // add code for user checking but for the mean time, only admin can log in
    // add code for user checking but for the mean time, only admin can log in
    // add code for user checking but for the mean time, only admin can log in
    // useEffect(() => {
    //     fetch(IP.protocol + '://' + IP.address + ':' + IP.db_port + '/employee/' + Cookies.get().token,
    //         {
    //             method: 'GET',
    //         }
    //     )
    //     .then(function(response){
    //         return response.json()
    //     })
    //     .then(function(response){
    //         if(response.result == 'true'){
    //             // alert(response.employees)
    //             if(response.employees[0]){
    //                 var employeeFirstName = response.employees[0].firstname
    //                 var employeeMiddleName = response.employees[0].middlename
    //                 var employeeLastName = response.employees[0].lastname
    //                 setEmployeeName(employeeMiddleName ? 
    //                     (employeeFirstName + " " + String(employeeMiddleName).charAt(0) + ". " + employeeLastName) :
    //                     (employeeFirstName + " " + employeeLastName)
    //                 )
    //                 // setEmployeeName(employeeFirstName + " " + String(employeeMiddleName).charAt(0) + ". " + employeeLastName)
    //                 setVisibility('false')
    //             }
    //             else{
    //                 if(Cookies.get().token){
    //                     if(Cookies.get().token == 'adminCenterAdministrator'){
    //                         setEmployeeName('Administrator')
    //                         setVisibility('false')
    //                     }
    //                     else{
    //                         setEmployeeName('Error')
    //                         setVisibility('false')
    //                     }
    //                 }
    //                 else{
    //                     // navigate('/')
    //                     setVisibility('false')
    //                 }
    //             }
    //         }
    //     })
    //     .catch(function(error){
    //         setOpenSnackBar(true);
    //         setSeverity('error');
    //         setSnackBarMessage('Something went wrong. Please try again later. ' + error)
    //         setVisibility('false')
    //         alert(Cookies.get().token)
    //     })
    // },[])



    // add this for log in session checking
    // add this for log in session checking
    // add this for log in session checking
    useEffect(() => {

        const parsedTitle = location.pathname.split('/').pop().replace(/\W/g, ' ');
        selectMenu(parsedTitle)
        if(Cookies.get().token){
            var token = Cookies.get().token;
            if(token == 'admin' || token == 'user'){
                
            }
            else{
                navigate('/')
            }
        }
        else{
            navigate('/')
        }
    }, [])


    
    return (
        <Box sx={HomeMainCss.wrapper}>
            <Box sx={HomeMainCss.header}>
                <Box sx={HomeMainCss.sidebarHeaderContainer}>
                    <Box sx={HomeMainCss.menuContainer}>
                        <MenuIcon
                            fontSize = 'medium'
                            sx = {{
                                color : 'white',
                                cursor: 'pointer',
                            }}
                            onClick = {() => {
                                minimizeSidebar()
                            }}
                        />
                    </Box>
                    <Box
                        component='img'
                        sx={HomeMainCss.sidebarLogo}
                        src={ocdLogo}
                    />
                    <Typography sx={HomeMainCss.sidebarSystemname}>
                        ADMIN center
                    </Typography>
                </Box>
                <Box sx={HomeMainCss.subHeaderContainer}>
                    <BasicMenu
                        button = {
                            <>
                                <Tooltip title={employeeName}>
                                    <Avatar 
                                        alt={employeeName}
                                        src="/static/images/avatar/2asd.jpg" 
                                        sx={HomeMainCss.avatar}
                                    />
                                </Tooltip>
                            </>
                            
                        }
                        menu = {
                            <HomeMenu
                                changePassword = {openChangePasswordForm}
                            />
                        }
                    />
                </Box>
            </Box>
            <Box sx={HomeMainCss.bodyContainer}>
                <Box 
                    sx={HomeMainCss.sidebarWrapper}
                    id='sidebar'
                >


                    {/* add sidebar later here */}
                    {/* add sidebar later here */}
                    {/* add sidebar later here */}
                    <HomeSidebar
                        selectMenu = {selectMenu}
                    />


                </Box>
                <Box sx={HomeMainCss.contentContainer}>
                    <Box sx={HomeMainCss.pageTitle}>
                        {pageTitle}
                    </Box>
                    <Outlet/>
                </Box>
            </Box>

            {/* add change password later here */}
            {/* add change password later here */}
            {/* add change password later here */}
            {/* <AdminHomeChangePassword
                open={open}
                handleClose={handleClose}
            /> */}

            <BasicSnackbar
                open={openSnackBar}
                severity={severity}
                message={snackBarMessage}
                onClose={handleCloseSnackBar}
                fontSize='14px'
            />
            {
                visibility == 'true' ? (
                    <Loader
                        // type='balls'
                        // color='blue'
                        // height='80px'
                        // width='80px'
                    />
                ) : null
            }
        </Box>
    )
}

export default HomeMain
