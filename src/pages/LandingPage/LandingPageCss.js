import { RootCss } from "../../rootCss/RootCss";

export const LandingPageCss = {
    wrapper: {
        // border: 'solid 1px red',
        // backgroundImage: `url(${blobBg})`,
        // backgroundSize: '100%',
        margin: '0px',
        padding: '0px',
        minHeight: '100vh',
        minWidth: '100%',
        maxWidth: '100%',
        display: 'flex',
        boxSizing: 'border-box',
    },
    loginContainer: {
        // border: 'solid 1px black',
        margin: 'auto',
        height: '400px',
        width: '400px',
        boxSizing: 'border-box'
    },
    loginheaderContainer: {
        // border: 'solid 1px black',
        padding: '0px 0px 24px 0px',
        boxSizing: 'border-box'
    },
    headerTop: {
        // border: 'solid 1px black',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '24px',
        lineHeight: '24px',
        fontWeight: '500',
        color: `${RootCss.colors.primaryDarkColor}`,
        textAlign: 'center',
        boxSizing: 'border-box'
    },
    headerBottom: {
        // border: 'solid 1px black',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '18px',
        lineHeight: '18px',
        color: `${RootCss.colors.primaryDarkColor}`,
        textAlign: 'center',
        boxSizing: 'border-box'
    },
    formInput: {
        // border: 'solid 1px black',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '12px'
    },
    inputs: {
        width: '100%'
    },
    halfInputs: {
        width: '48%',
    },
    thirdsInputs: {
        width: '32%'
    },
}