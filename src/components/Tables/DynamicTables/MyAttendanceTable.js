import React, { useEffect } from 'react'
import Table from '../Table'

const MyAttendanceTable = ({
    showMyAttendance,
    json
}) => {
    // column fields of scanners table
    const columns = [
        { field: 'date', headerName: 'DAY', sortable: false},
        { field: 'am_in', headerName: 'AM IN', flex: 1, sortable: false },
        { field: 'am_out', headerName: 'AM OUT', flex: 1, sortable: false },
        { field: 'pm_in', headerName: 'PM IN', flex: 1, sortable: false },
        { field: 'pm_out', headerName: 'PM OUT', flex: 1, sortable: false },
    ]

    useEffect(() => {
        showMyAttendance()
    },[])
    
    return (
        <>
            <Table
                rows={json}
                columns={columns}
                onError={() => {

                }}
                sx={{
                    minHeight: '100%',
                    zIndex: '10'
                }}
                hideFooter={true}
                customPageSize={50}
            />
        </>
    )
}

export default MyAttendanceTable