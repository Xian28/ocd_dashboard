import { Box, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RegionalCss } from './RegionalCss'
import { StyledTextField } from '../../../styledCss/StyledTextField'
import { RootCss } from '../../../rootCss/RootCss'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilledButton from '../../../components/Buttons/FilledButton/FilledButton'
import Loader from '../../../components/Loader/Loader'
import RegionalAddDisasterForm from './RegionalAddDisasterForm'
import DisasterTable from '../../../components/Tables/DynamicTables/DisasterTable/DisasterTable'
import { IP } from '../../../ip/IP'

const Regional = () => {
    const [searchValue, setSearchValue] = useState('');

    //initialization of position table json
    const [json, setJson] = useState([])

    const [visibility, setVisibility] = useState('false')
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [severity, setSeverity] = useState('')
    const [snackBarMessage, setSnackBarMessage] = useState('')
    const handleCloseSnackBar = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    }

    // open add form
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const openAddForm = () => {
        setOpen(true)
    }

    // fetch all disasters
    const showDisasters = () => {
        setVisibility('True')
        fetch(IP.protocol + '://' + IP.address + ':' + IP.db_port + '/disaster/',
            {
                method: 'GET',
            }
        )
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            if(response.result == 'true'){
                const customJSON = response.disasters.map((origJSON, index) => {
                    return {
                        'id': index,
                        'disaster_id': origJSON.disaster_id,
                        'province': origJSON.province,
                        'city': origJSON.city,
                        'barangay': origJSON.barangay,
                        'family': origJSON.family,
                    }
                })
                setJson(customJSON)
                setVisibility('false')
            }
        })

    }

    return (
        <Box sx={RegionalCss.wrapper}>
            <Box sx={RegionalCss.pageHeader}>
                <Box
                    sx={RegionalCss.searchInput}
                >
                    <StyledTextField
                        // error= {firstNameInputErrorState}
                        // helperText={firstNameInputHelperTextState}
                        sx={RegionalCss.inputs}
                        size='small'
                        id='searchInput'
                        type='search'
                        placeholder="Search here"
                        name="firstName"
                        label="Search here"
                        defaultValue={searchValue}
                        InputProps={{
                            style: {
                                fontSize: '14px',
                                // padding: '7px 14px',
                                fontFamily: `${RootCss.fonts.mainFont}`
                            },
                            maxLength: 100,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon 
                                        sx={{
                                            color: `${RootCss.colors.primaryColor}`
                                        }}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        onChange={(event) => {
                            setSearchValue(event.target.value)
                            if(event.target.value.trim().length > 0){
                                document.getElementById('searchMessage').style.display = 'flex'
                            }
                            else{
                                document.getElementById('searchMessage').style.display = 'none'
                            }
                            // showEvents()
                        }}
                    />
                </Box>
                <Box>
                    <FilledButton
                        title='New Disaster Report'
                        onClick={() => {
                            openAddForm()
                        }}
                        startIcon={
                            <AddCircleIcon />
                        }
                        backgroundColor={RootCss.colors.primaryColor}
                        backgroundColorHover={RootCss.colors.primaryColorHover}
                        fontFamily={RootCss.fonts.mainFont}
                        fontSize='16px'
                        minWidth='100px'
                        disableElevation={true}
                    />
                </Box>
            </Box>
            <Typography
                sx={RegionalCss.seachMessage}
                id="searchMessage"
                style={{
                    display: 'none'
                }}
            >
                Showing search results...
            </Typography>
            <Box sx={RegionalCss.tableContainer}>
                <DisasterTable
                    showDisasters = {showDisasters}
                    json = {json}
                />
            </Box>
            <RegionalAddDisasterForm
                open={open}
                handleClose={handleClose}
                showDisasters = {showDisasters}
            />
            {
                visibility == 'true' ? (
                    <Loader
                        text = "Loading Regional Reports"
                    />
                ) : null
            }
        </Box>
    )
}

export default Regional
