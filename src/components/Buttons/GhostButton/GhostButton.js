import { Button } from '@mui/material'
import React from 'react'

const GhostButton = ({
    title,
    onClick,
    startIcon,
    endIcon,
    disabled,
    size,
    backgroundColor,
    border,
    borderHover,
    color,
    margin,
    colorHover,
    fontFamily,
    fontSize,
    disableElevation,
    borderRadius,
    backgroundColorHover,
    width,
    height,
    padding
}) => {
  return (
    <Button
        variant='outlined'
        startIcon = {startIcon}
        endIcon = {endIcon}
        onClick = {onClick}
        disabled = {disabled}
        size = {size}
        disableElevation = {disableElevation}
        sx={{
            textTransform: 'none',
            width: width,
            margin: margin,
            padding: padding,
            backgroundColor: backgroundColor,
            border: border,
            color: color,
            fontFamily: fontFamily,
            fontSize: fontSize,
            minWidth: '0%',
            border: border,
            height: height,
            borderRadius: borderRadius,
            '&:hover': {
                border: borderHover,
                color: colorHover,
                backgroundColor: backgroundColorHover,
            },
            // ['@media only screen and (max-width: 479px)']: 
            // {
            //     // background: 'white'
            //     minWidth: '100%',
            //     // border: 'solid 1px black',
            // }
        }}
    >
        {title}
    </Button>
  )
}

export default GhostButton