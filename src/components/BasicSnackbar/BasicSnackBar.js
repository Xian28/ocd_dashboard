import React, { forwardRef } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BasicSnackbar = ({
    open, 
    onClose, 
    severity, 
    message,
    fontSize,
    vertical='top',
    horizontal='center',
}) => {
    return (
        <>
            <Snackbar
                open={open} 
                autoHideDuration={6000} 
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                key={message}
            >
                <Alert 
                    onClose={onClose} 
                    severity={severity} 
                    sx={{ 
                        width: '100%',
                        fontSize: fontSize ? fontSize : '24px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default BasicSnackbar