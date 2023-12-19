import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const BasicMenu = ({
    button,
    menu,
}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <>
            <Box onClick={handleClick}>
                {button}
            </Box>
            <Menu
                sx={{
                    zIndex: '18'
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                disableAutoFocusItem
            >   
                {menu}
            </Menu>
        </>
    )
}

export default BasicMenu