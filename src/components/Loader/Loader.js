import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ReactLoading from 'react-loading';
import { LoaderCss } from './LoaderCss';
import { useState } from 'react';

const Loader = ({
    type,
    color,
    height,
    width,
    text
}) => {
    const colors = {
        color1: '#543090',
        color2: '#2C70B7',
        color3: '#93C73E',
        color4: '#E6D235'
    }
    const [loadingColor, setLoadingColor] = useState(colors.color1);

    var i = 1;

    const changeColor = () => {
        if(i == 1){
            setLoadingColor(colors.color1)
        }
        else if(i == 2){
            setLoadingColor(colors.color2)
        }
        else if(i == 3){
            setLoadingColor(colors.color3)
        }
        else if(i == 4){
            setLoadingColor(colors.color4)
        }
        else{
            setLoadingColor(colors.color1)
        }

        if(i == 4){
            i = 1
        }
        else{
            i++
        }
    }

    useEffect(() => {
        setInterval(changeColor,1000)
    },[])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            left: 0,
            // background: 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))',
            background: 'white',
            zIndex: '20'
        }}>
            <Typography
                sx={LoaderCss.textLoader}
            >
                {text}
            </Typography>
            <ReactLoading 
                type={'bars'} 
                // color={RootCss.colors.primaryColor} 
                color={loadingColor} 
                height={'40px'} 
                width={'40px'} 
            />
        </Box>
    )
}

export default Loader