import React, { useEffect } from 'react'
import Table from '../Table'

const ScannerTable = ({
    showScanner,
    json,
}) => {
    // column fields of scanners table
    const columns = [
        { field: 'scannerName', headerName: 'Device Name', flex: 1 },
        { field: 'scannerIP', headerName: 'IP Address', flex: 1 },
    ]

    useEffect(() => {
        showScanner()
    },[])

    return (
        <>
            <Table
                rows={
                    json
                }
                columns={columns}
                // loading={!json.length}
                onError={() => {

                }}
                sx={{
                    minHeight: '100%',
                    zIndex: '10'
                }}
            />
        </>
    )
}

export default ScannerTable