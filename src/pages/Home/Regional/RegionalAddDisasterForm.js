import React, { useEffect, useState } from 'react'
import BasicModal from '../../../components/BasicModal/BasicModal'
import { Box } from '@mui/material'
import Loader from '../../../components/Loader/Loader'
import { RegionalCss } from './RegionalCss'
import { StyledTextField } from '../../../styledCss/StyledTextField'
import { RootCss } from '../../../rootCss/RootCss'
import BasicSnackbar from '../../../components/BasicSnackbar/BasicSnackBar'
import { IP } from '../../../ip/IP'

const RegionalAddDisasterForm = ({
    open,
    handleClose,
    showDisasters
}) => {
    // submit form on enter
    const keyPress = (event) => {
        if (event.key === 'Enter') {
            addDisaster()
        }
    }

    // error handling
    const [provinceInputErrorState, setProvinceInputErrorState] = useState(false)
    const [provinceInputHelperTextState, setProvinceInputHelperTextState] = useState(' ')
    const [cityInputErrorState, setCityInputErrorState] = useState(false)
    const [cityInputHelperTextState, setCityInputHelperTextState] = useState(' ')
    const [barangayInputErrorState, setBarangayInputErrorState] = useState(false)
    const [barangayInputHelperTextState, setBarangayInputHelperTextState] = useState(' ')
    const [familyInputErrorState, setFamilyInputErrorState] = useState(false)
    const [familyInputHelperTextState, setFamilyInputHelperTextState] = useState(' ')

    // handling snackbar
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

    // validation for
    // validation for
    const inputValidation = (
        condition,
        errorVariable,
        helperVariable,
        helperText
    ) => {
        var result = '';
        if(condition){
            errorVariable(true);
            helperVariable(helperText);
            result = 'invalid';
        }
        else{
            errorVariable(false);
            helperVariable(' ');
            result = 'valid';
        }

        return result
    }

    // scollintoview of invalid inputs
    // scollintoview of invalid inputs
    const scrollIntoInvalidInput = (inputID) => {
        document.getElementById(inputID).scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    }

    const addDisaster = () => {
        setVisibility('true')

        var provinceInput = document.getElementById('provinceInput').value
        var cityInput = document.getElementById('cityInput').value
        var barangayInput = document.getElementById('barangayInput').value
        var familyInput = document.getElementById('familyInput').value
    
        // counter of invald inputs
        var invalidInputCounter = 0;

        // most top input with invalid value
        var mostTopInvalidInput = '';

        // validation for province
        if(inputValidation(
                provinceInput.trim().length == 0,
                setProvinceInputErrorState,
                setProvinceInputHelperTextState,
                'Please enter Province'
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'provinceInput' :
                mostTopInvalidInput
            )
            invalidInputCounter++;
        }

        // validation for city
        if(inputValidation(
                cityInput.trim().length == 0,
                setCityInputErrorState,
                setCityInputHelperTextState,
                'Please enter City'
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'cityInput' :
                mostTopInvalidInput
            )
            invalidInputCounter++;
        }
        // validation for barangay
        if(inputValidation(
                barangayInput.trim().length == 0,
                setBarangayInputErrorState,
                setBarangayInputHelperTextState,
                'Please enter Barangay'
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'barangayInput' :
                mostTopInvalidInput
            )
            invalidInputCounter++;
        }
        // validation for family
        if(inputValidation(
                familyInput.trim().length == 0,
                setFamilyInputErrorState,
                setFamilyInputHelperTextState,
                'Please enter Family'
            ) == 'invalid'
        ){
            mostTopInvalidInput = (
                mostTopInvalidInput == '' ? 'familyInput' :
                mostTopInvalidInput
            )
            invalidInputCounter++;
        }

        // will scroll to most top invalid input
        if(mostTopInvalidInput != ''){
            scrollIntoInvalidInput(mostTopInvalidInput)
            document.getElementById(mostTopInvalidInput).focus()
        }

        // all inputs are valid and will now submit data
        if(invalidInputCounter == 0){
            // json for event details to be inserted
            var userJSON = {
                province: provinceInput,
                city: cityInput,
                barangay: barangayInput,
                family: familyInput
            }
            // add disaster
            fetch(IP.protocol + '://' + IP.address + ':' + IP.db_port + '/disaster/add',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userJSON)
                }
            )
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                if(response.result == 'true'){
                    setOpenSnackBar(true);
                    setSeverity('success');
                    setSnackBarMessage('Disaster is successfully added.')
                    showDisasters()
                    handleClose()
                    setVisibility('false')
                }
                else if(response.result == 'false'){
                    setOpenSnackBar(true);
                    setSeverity('error');
                    setSnackBarMessage(response.message)
                    setVisibility('false')
                }
                else{
                    setOpenSnackBar(true);
                    setSeverity('error');
                    setSnackBarMessage(`Oops. Something went wrong while you're adding new event. Please try again thank you.` + response.error)
                    setVisibility('false')
                }
            })
        }
        else{
            setVisibility(false)
        }

    }

    const modalBody = (
        <>
            <Box
                sx={RegionalCss.formInput}
            >
                <StyledTextField
                    error= {provinceInputErrorState}
                    helperText={provinceInputHelperTextState}
                    sx={RegionalCss.inputs}
                    size='small'
                    id='provinceInput'
                    type='text'
                    placeholder="Enter Province"
                    name="province"
                    label="Province"
                    defaultValue=''
                    inputProps={{
                        style: {
                            fontSize: '14px',
                            // padding: '7px 14px',
                            fontFamily: `${RootCss.fonts.mainFont}`
                        },
                        maxLength: 250
                    }}
                    onKeyDown={(event) => {
                        keyPress(event)
                    }}
                />
            </Box>
            <Box
                sx={RegionalCss.formInput}
            >
                <StyledTextField
                    error= {cityInputErrorState}
                    helperText={cityInputHelperTextState}
                    sx={RegionalCss.inputs}
                    size='small'
                    id='cityInput'
                    type='text'
                    placeholder="Enter City"
                    name="city"
                    label="City"
                    defaultValue=''
                    inputProps={{
                        style: {
                            fontSize: '14px',
                            // padding: '7px 14px',
                            fontFamily: `${RootCss.fonts.mainFont}`
                        },
                        maxLength: 250
                    }}
                    onKeyDown={(event) => {
                        keyPress(event)
                    }}
                />
            </Box>
            <Box
                sx={RegionalCss.formInput}
            >
                <StyledTextField
                    error= {barangayInputErrorState}
                    helperText={barangayInputHelperTextState}
                    sx={RegionalCss.inputs}
                    size='small'
                    id='barangayInput'
                    type='text'
                    placeholder="Enter Barangay"
                    name="barangay"
                    label="Barangay"
                    defaultValue=''
                    inputProps={{
                        style: {
                            fontSize: '14px',
                            // padding: '7px 14px',
                            fontFamily: `${RootCss.fonts.mainFont}`
                        },
                        maxLength: 250
                    }}
                    onKeyDown={(event) => {
                        keyPress(event)
                    }}
                />
            </Box>
            <Box
                sx={RegionalCss.formInput}
            >
                <StyledTextField
                    error= {familyInputErrorState}
                    helperText={familyInputHelperTextState}
                    sx={RegionalCss.inputs}
                    size='small'
                    id='familyInput'
                    type='text'
                    placeholder="Enter Family"
                    name="family"
                    label="Family"
                    defaultValue=''
                    inputProps={{
                        style: {
                            fontSize: '14px',
                            // padding: '7px 14px',
                            fontFamily: `${RootCss.fonts.mainFont}`
                        },
                        maxLength: 250
                    }}
                    onKeyDown={(event) => {
                        keyPress(event)
                    }}
                />
            </Box>
        </>
    )

    useEffect(() => {
        // resetting errors
        setProvinceInputErrorState(false)
        setProvinceInputHelperTextState(' ')
        setCityInputErrorState(false)
        setCityInputHelperTextState(' ')
        setBarangayInputErrorState(false)
        setBarangayInputHelperTextState(' ')
        setFamilyInputErrorState(false)
        setFamilyInputHelperTextState(' ')
    },[open])

    return (
        <Box>
            <BasicModal
                open={open}
                handleClose={handleClose}
                modalTitle='Add New Disaster'
                modalBody={modalBody}
                buttonLabel='Add'
                cancelButtonLabel='Cancel'
                onClick={() => {
                    addDisaster()
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

export default RegionalAddDisasterForm
