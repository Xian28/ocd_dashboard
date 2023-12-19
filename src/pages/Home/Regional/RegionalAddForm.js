import React from 'react'

const RegionalAddForm = () => {
    return (
        <Box>
            <BasicModal
                open={open}
                handleClose={handleClose}
                modalTitle='Add New Event'
                modalBody={modalBody}
                buttonLabel='Add'
                cancelButtonLabel='Cancel'
                onClick={() => {
                    addEvent()
                }}
            />
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
                        text="Loading Details"
                    />
                ) : null
            }
        </Box>
    )
}

export default RegionalAddForm
