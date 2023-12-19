import { Button } from '@mui/material'
import React from 'react'

const TextButton = ({
    title,
    onClick,
    startIcon,
    endIcon,
    disabled,
    size,
    width,
    color,
    backgroundColor,
    colorHover,
    margin,
    fontFamily,
    fontSize,
    disableElevation,
    borderRadius,
    visibility,
    padding,
    display,
    justifyContent,
    height
}) => {
  return (
    <Button
        variant='text'
        startIcon = {startIcon}
        endIcon = {endIcon}
        onClick = {onClick}
        disabled = {disabled}
        size = {size}
        disableElevation = {disableElevation}
        sx={{
            textTransform: 'none',
            display: display,
            justifyContent: justifyContent,
            width: width,
            height: height,
            borderRadius: borderRadius,
            visibility: visibility,
            color: color,
            fontFamily: fontFamily,
            fontSize: fontSize,
            margin: margin,
            padding: padding,
            minWidth: '0%',
            '&:hover': {
                color: colorHover,
                backgroundColor: backgroundColor,
            },
            ['@media (min-width: 769px) and (max-width: 992px)']: 
            {
                width: '100%'
            }
        }}
    >
        {title}
    </Button>
  )
}

export default TextButton