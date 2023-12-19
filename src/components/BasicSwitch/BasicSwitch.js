import React from 'react'
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

const BasicSwitch = ({
    scannerOn,
    scannerOff
}) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <Tooltip title="Toggle Scanner">
            <Switch 
                {...label}
                onChange = {(event) => {
                    if(event.target.checked === true){
                        scannerOn()
                    }
                    else if(event.target.checked === false){
                        scannerOff()
                    }
                }}
            />
        </Tooltip>
    )
}

export default BasicSwitch