import React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Box, Typography } from '@mui/material'
import { HomeMainCss } from './HomeMainCss';

const HomeSidebar = ({
    selectMenu
}) => {
    const admin = [
        {
            'name': 'dashboard',
            'label': 'Dashboard',
            'icon': <DashboardOutlinedIcon 
                        sx={{
                            color: 'white'
                        }}
                        fontSize='medium'
                    />
        },
        {
            'name': 'regional',
            'label': 'Regional Reports',
            'icon': <AssessmentIcon 
                        sx={{
                            color: 'white'
                        }}
                        fontSize='medium'
                    />
        },
        // {
        //     'name': 'visitors',
        //     'label': 'Visitors',
        //     'icon': <GroupIcon 
        //                 sx={{
        //                     color: 'white'
        //                 }}
        //                 fontSize='medium'
        //             />
        // },
        // {
        //     'name': 'events',
        //     'label': 'Events',
        //     'icon': <EventIcon 
        //                 sx={{
        //                     color: 'white'
        //                 }}
        //                 fontSize='medium'
        //             />
        // },
        // {
        //     'name': 'attendance',
        //     'label': 'Attendance',
        //     'icon': <WatchLaterIcon 
        //                 sx={{
        //                     color: 'white'
        //                 }}
        //                 fontSize='medium'
        //             />
        // },
    ]

    return (
        <>
            {admin.map((values, index) => (
                <Box
                    key={index}
                    sx={HomeMainCss.sideBarMenuContainer}
                    className='sidebarMenus'
                    id={values.name}
                    onClick = {() => {
                        selectMenu(values.name)
                    }}
                >
                    <Box sx={HomeMainCss.iconContainer}>
                        {values.icon}
                    </Box>
                    <Typography 
                        sx={HomeMainCss.labelContainer}
                        className='sidebarMenuLabels'
                    >
                        {values.label}
                    </Typography>
                </Box>
            ))}
        </>
    )
}

export default HomeSidebar
