import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const Table = ({
    rows,
    columns,
    loading,
    sx,
    hideFooter,
    customPageSize,
}) => {
    const [pageSize, setPageSize] = useState(25);
    return (
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          disableSelectionOnClick={true}
          pageSize={customPageSize ? customPageSize : pageSize}
          pagination
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10,25,100]}
          sx={sx}
          autoHeight={true}
          hideFooter={hideFooter}
          density='compact'
          disableColumnMenu
        />
    )
}

export default Table