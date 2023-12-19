import { Button } from '@mui/material'
import React from 'react'

const FilledButton = ({
    id,
    className,
    title,
    onClick,
    startIcon,
    endIcon,
    disabled,
    size,
    backgroundColor,
    backgroundColorHover,
    color,
    colorHover,
    fontFamily,
    fontSize,
    fontWeight,
    width,
    disableElevation,
    margin,
    padding,
    borderRadius,
    height,
    component
}) => {
    return (
        <Button
            component={component}
            id={id}
            className={className}
            variant='contained'
            startIcon = {startIcon}
            endIcon = {endIcon}
            onClick = {onClick}
            disabled = {disabled}
            size = {size}
            disableElevation = {disableElevation}
            sx={{
                textTransform: 'none',
                backgroundColor: backgroundColor,
                color: color,
                fontFamily: fontFamily,
                fontSize: fontSize,
                fontWeight: fontWeight,
                minWidth: '0%',
                width: width,
                margin: margin,
                padding: padding,
                height: height,
                borderRadius: borderRadius,
                '&:hover': {
                    backgroundColor: backgroundColorHover,
                    color: colorHover,
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

export default FilledButton