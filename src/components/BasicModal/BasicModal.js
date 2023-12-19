import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { BasicModalCss } from './BasicModalCss'
import CloseIcon from '@mui/icons-material/Close';
import FilledButton from '../Buttons/FilledButton/FilledButton';
import { RootCss } from '../../rootCss/RootCss';
import TextButton from '../Buttons/TextButton/TextButton';

const BasicModal = ({
    open,
    handleClose,
    modalTitle,
    modalBody,
    buttonLabel,
    cancelButtonLabel,
    onClick,
    hasNoCancel
}) => {
    return (
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    zIndex: '19'
                }}
            >
                <Box sx={BasicModalCss.wrapper}>
                    <Box sx={BasicModalCss.modalHeader}>
                        <Typography sx={BasicModalCss.modalHeaderCaption}>
                            {modalTitle}
                        </Typography>
                        <Box sx={BasicModalCss.closeIconContainer}>
                            <CloseIcon 
                                sx={{
                                    color: `${RootCss.colors.closeRedColor}`,
                                    cursor: 'pointer'
                                }}
                                fontSize='medium'
                                onClick={handleClose}
                            />
                        </Box>
                    </Box>
                    <Box sx={BasicModalCss.modalContent}>
                        <Box sx={BasicModalCss.modalBody}>
                            {modalBody}
                        </Box>
                        <Box sx={BasicModalCss.modalFooter}>
                            <FilledButton
                                backgroundColor={RootCss.colors.primaryColor}
                                backgroundColorHover={RootCss.colors.primaryColorHover}
                                title={buttonLabel}
                                fontFamily={RootCss.fonts.mainFont}
                                fontSize='16px'
                                borderRadius='20px'
                                padding='0px 32px'
                                color='white'
                                height='40px'
                                disableElevation={true}
                                onClick={onClick}
                            />
                            <TextButton
                                title={cancelButtonLabel}
                                fontFamily={RootCss.fonts.mainFont}
                                fontSize='16px'
                                color={RootCss.colors.tertiaryDarkColor}
                                colorHover='#aaa'
                                backgroundColor='transparent'
                                margin='0px 20px 0px 0px'
                                onClick={handleClose}
                                visibility={hasNoCancel ? 'hidden' : 'visible'}
                            />
                        </Box>
                    </Box>
                </Box>
            </Modal>
    )
}

export default BasicModal