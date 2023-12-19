import { Tooltip } from '@mui/material'
import React, { useEffect } from 'react'
import { RootCss } from '../../../rootCss/RootCss'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Table from '../Table'
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

const DivisionTable = ({
    showDivision,
    json
}) => {
    // column fields of scanners table
    const columns = [
        { field: 'division_acronym', headerName: 'Division', minWidth: 100 },
        { field: 'division_name', headerName: 'Complete Name', flex: 1 },
        { field: 'division_head_fullname', headerName: 'Division Supervisor', flex: 1 },
        { field: 'division_oic_fullname', headerName: 'Division OIC Supervisor', flex: 1 },
        { field: 'division_staff_count', headerName: 'Staff Count', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            width: 150,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div
                        style={{
                        display: 'flex',
                        flexGrow: '1',
                        padding: '0px 10px',
                        justifyContent: 'space-between',
                        }}
                    >
                        <div 
                            onClick={
                                () => {
                                    // showDisplayDialog(
                                    //     params.row.id,
                                    //     params.row.name,
                                    //     params.row.birthday,
                                    //     params.row.sex,
                                    //     params.row.contactNumber,
                                    //     params.row.email,
                                    //     params.row.password,
                                    //     params.row.sector,
                                    //     params.row.positionOrYearLevel,
                                    //     params.row.officeOrSchool,
                                    //     params.row.regionAddress,
                                    //     params.row.provinceAddress,
                                    //     params.row.status,
                                    //     params.row.date_created,
                                    //     params.row.date_updated,
                                    // );
                                }
                            }  
                            style={{ 
                                cursor: "pointer", 
                                color: `${RootCss.colors.adminBaseColor}`
                            }}
                        >
                            <Tooltip
                                title="Manage" 
                                placement="left-start" 
                                arrow
                            >
                                <CreateOutlinedIcon index={params.row.id} />
                            </Tooltip>
                        </div>
                    </div>
                )
            }
        }
    ]

    useEffect(() => {
        showDivision()
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
                    zIndex: '10',
                    // fontSize: '12px'
                }}
            />
        </>
    )
}

export default DivisionTable