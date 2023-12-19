import { RootCss } from "../../rootCss/RootCss";
const mobileBreakpoint = '@media (max-width: 576px)';
const tabletBreakpoint = '@media (min-width: 577px) and (max-width: 768px)';
const laptopBreakpoint = '@media (min-width: 769px) and (max-width: 992px)';
const desktopBreakpoint = '@media (min-width: 993px) and (max-width: 1200px)';
const largeDesktopBreakpoint = '@media (min-width: 1200px)';

export const BasicModalCss = {
    wrapper: {
        // border: 'solid 1px black',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '95vw',
        width: '500px',
        minHeight: '200px',
        maxHeight: '90%',
        background: 'white',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        [laptopBreakpoint]: {
            // border: 'solid 10px black',
        },
        flexDirection: 'column',
        [tabletBreakpoint]: {
            // border: 'solid 10px red',
        },
        [mobileBreakpoint]: {
            // border: 'solid 10px black',
            maxWidth: '100vw',
            minHeight: '100%',
        },
    },
    modalContent: {
        // border: 'solid 5px black',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        overflow: 'auto',
        minHeight: '100%',
        width: '100%',
    },
    modalHeader: {
        background: `${RootCss.colors.primaryColor}`,
        // borderBottom: 'solid 1px #ccc',
        padding: '20px 20px 20px 20px',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'space-between',
        // position: 'sticky',
        // top: '0',
        // zIndex: '2'
    },
    closeIconContainer: {
        // border: 'solid 1px black',
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        position: 'absolute',
        right: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.2s',
        '&:hover': {
            background: `${RootCss.colors.primaryColorHover}`,
        }

    },
    modalHeaderCaption: {
        // border: 'solid 1px black',
        height: '40px',
        color: 'white',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '20px',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center',
    },
    modalBody: {
        borderBottom: 'solid 1px #ccc',
        flex: '1',
        padding: '20px 20px 0px 20px',
    },
    modalFooter: {
        // border: 'solid 1px black',
        // flex: '1',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'end'
    },
}