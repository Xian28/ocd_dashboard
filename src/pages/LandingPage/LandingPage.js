import React, { useState } from 'react'
import { Box, Typography, InputAdornment } from '@mui/material';
import { LandingPageCss } from './LandingPageCss';
import { StyledTextField } from '../../styledCss/StyledTextField';
import { RootCss } from '../../rootCss/RootCss';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FilledButton from '../../components/Buttons/FilledButton/FilledButton';
// import { IP } from '../../ip/IP';
import Loader from '../../components/Loader/Loader';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import BasicSnackbar from '../../components/BasicSnackbar/BasicSnackBar';

const LandingPage = () => {
    const navigate = useNavigate()

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

    // form inputs validation
    const [userNameInputErrorState, setUserNameInputErrorState] = useState(false);
    const [userNameInputHelperTextState, setUserNameInputHelperTextState] = useState(' ');
    const [passwordInputErrorState, setPasswordInputErrorState] = useState(false);
    const [passwordInputHelperTextState, setPasswordInputHelperTextState] = useState(' ');

    // // loading UI handling
    // const [visibility, setVisibility] = useState('false')

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

    // login
    const login = () => {
        // show loading screen
        setVisibility('true')

        // number of invalid inputs
        var invalidInputCounter = 0;

        // fetching inputs value
        var usernameInput = document.getElementById('usernameInput').value
        var passwordInput = document.getElementById('passwordInput').value

        // inputs validation
        // username
        if(inputValidation(
            usernameInput.trim().length == 0,
                setUserNameInputErrorState,
                setUserNameInputHelperTextState,
                'Please enter username'
            ) == 'invalid'
        ){
            invalidInputCounter++;
        }
        // password
        if(inputValidation(
            passwordInput.trim().length == 0,
                setPasswordInputErrorState,
                setPasswordInputHelperTextState,
                'Please enter password'
            ) == 'invalid'
        ){
            invalidInputCounter++;
        }

        if(invalidInputCounter == 0){
            var userJSON = {
                username: usernameInput,
                password: passwordInput
            }

            if(userJSON.username == 'admin' && userJSON.password == 'password'){
                setOpenSnackBar(true);
                setSeverity('success');
                setSnackBarMessage('Welcome Admin')
                Cookies.set('token','admin')
                navigate('/home')
                setVisibility('false')
            }
            else if(userJSON.username == 'user' && userJSON.password == 'password'){
                setOpenSnackBar(true);
                setSeverity('success');
                setSnackBarMessage('Welcome User')
                Cookies.set('token','user')
                navigate('/home')
                setVisibility('false')
            }
            else{
                setOpenSnackBar(true);
                setSeverity('error');
                setSnackBarMessage('Sorry. Username and password do not matched.')
                setVisibility('false')
            }
            

            // fetch(IP.protocol + '://' + IP.address + ':' + IP.db_port + '/admin/login',
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(userJSON)
            //     }
            // )
            // .then(function(response){
            //     return response.json()
            // })
            // .then(function(response){
            //     if(response.result == 'true'){
            //         // alert('credentials matched')
            //         Cookies.set('token','adminCenterAdministrator')
            //         navigate('/home')
            //     }
            //     else if(response.result == 'false'){
            //         alert('Username or password is incorrect.')
            //     }
            //     else{
            //         alert('Something went wrong with the API.')
            //     }
            //     setVisibility(false)
            // })
            // .catch(function(err){
            //     // setOpenSnackBar(true);
            //     // setSeverity('error');
            //     // setSnackBarMessage('Oops. Something went wrong with the api. Error e001: ' + err.message)
            //     // setVisibility('false')
            //     alert('Oops. Something went wrong with the API. Please try again. Thank you.')
            //     setVisibility(false)
            // })
        }
        else{
            setVisibility(false)
        }
    }

    const showPassword = () => {
        var showPasswordIcon = document.getElementById('showPasswordIcon')
        var hidePasswordIcon = document.getElementById('hidePasswordIcon')
        var passwordInput = document.getElementById('passwordInput')
        showPasswordIcon.style.display = 'none'
        hidePasswordIcon.style.display = 'block'
        passwordInput.type = 'text'
    }

    const hidePassword = () => {
        var hidePasswordIcon = document.getElementById('hidePasswordIcon')
        var showPasswordIcon = document.getElementById('showPasswordIcon')
        var passwordInput = document.getElementById('passwordInput')
        hidePasswordIcon.style.display = 'none'
        showPasswordIcon.style.display = 'block'
        passwordInput.type = 'password'
    }

    // submit form on enter
    const keyPress = (event) => {
        if (event.key === 'Enter') {
            login()
        }
    }

    useEffect(() => {
        if(Cookies.get().token){
            if(Cookies.get().token == 'admin' || Cookies.get().token == 'user'){
                navigate('/home')
            }
        }
    },[]);

    return (
        <Box sx={LandingPageCss.wrapper}>
            <Box sx={LandingPageCss.loginContainer}>
                <Box sx={LandingPageCss.loginheaderContainer}>
                    <Typography sx={LandingPageCss.headerTop}>
                        OCD DASHBOARD SYSTEM
                    </Typography>
                    <Typography sx={LandingPageCss.headerBottom}>
                        Admin Center
                    </Typography>
                </Box>
                <Box>
                    <Box
                        sx={LandingPageCss.formInput}
                    >
                        <StyledTextField
                            error= {userNameInputErrorState}
                            helperText={userNameInputHelperTextState}
                            sx={LandingPageCss.inputs}
                            size='small'
                            id='usernameInput'
                            type='text'
                            placeholder="Enter username"
                            name="username"
                            label="Username"
                            defaultValue=''
                            InputProps={{
                                style: {
                                    fontSize: '14px',
                                    // padding: '7px 14px',
                                    fontFamily: `${RootCss.fonts.mainFont}`
                                },
                                maxLength: 50,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon 
                                            sx={{
                                                // color: `${RootCss.colors.primaryColor}`
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            onKeyDown={(event) => {
                                keyPress(event)
                            }}
                        />
                    </Box>
                    <Box
                        sx={LandingPageCss.formInput}
                    >
                        <StyledTextField
                            error= {passwordInputErrorState}
                            helperText={passwordInputHelperTextState}
                            sx={LandingPageCss.inputs}
                            size='small'
                            id='passwordInput'
                            type='password'
                            placeholder="Enter password"
                            name="password"
                            label="Password"
                            defaultValue=''
                            InputProps={{
                                style: {
                                    fontSize: '14px',
                                    // padding: '7px 14px',
                                    fontFamily: `${RootCss.fonts.mainFont}`
                                },
                                maxLength: 50,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <VpnKeyIcon 
                                             sx={{
                                                // color: `${RootCss.colors.primaryColor}`
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment 
                                        position="end"
                                    >
                                        <VisibilityIcon 
                                            id='showPasswordIcon'
                                            onClick={showPassword}
                                             sx={{
                                                display: 'block',
                                                cursor: 'pointer',
                                            }}
                                        />
                                        <VisibilityOffIcon 
                                            id='hidePasswordIcon'
                                            onClick={hidePassword}
                                             sx={{
                                                display: 'none',
                                                cursor: 'pointer',
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            onKeyDown={(event) => {
                                keyPress(event)
                            }}
                        />
                    </Box>
                    <FilledButton
                        title='LOGIN'
                        size='medium'
                        backgroundColor={RootCss.colors.primaryColor}
                        backgroundColorHover={RootCss.colors.primaryColorHover}
                        fontFamily={RootCss.fonts.mainFont}
                        fontSize={'16px'}
                        width='100%'
                        disableElevation={true}
                        onClick={login}
                    />
                </Box>
            </Box>
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
                        text='Authenticating'
                    />
                ) : null
            }
        </Box>
    )
}

export default LandingPage
