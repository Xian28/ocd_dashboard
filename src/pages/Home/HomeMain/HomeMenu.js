import React from 'react'
import { Box } from '@mui/material'
import { HomeMainCss } from './HomeMainCss'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const HomeMenu = ({
    changePassword
}) => {
    const navigate = useNavigate()
    return (
        <Box sx={HomeMainCss.avatarMenuContainer}>


            {/* add change password here */}
            {/* add change password here */}
            {/* add change password here */}
            {/* <Box
                sx={HomeMainCss.avatarMenu}
                onClick = {() => {
                    changePassword()
                }}
            >
                Change password
            </Box> */}


            <Box 
                sx={HomeMainCss.avatarMenu}
                onClick = {() => {
                    Cookies.remove('token')
                    navigate('/')
                }}
            >
                Logout
            </Box>
        </Box>
    )
}

export default HomeMenu
