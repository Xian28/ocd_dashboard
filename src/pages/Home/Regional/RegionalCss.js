import { RootCss } from "../../../rootCss/RootCss";

export const RegionalCss = {
    wrapper: {
        // border: 'solid 1px black',
        display: 'flex',
        width: '100%',
        flexDirection: 'column'
    },
    pageHeader: {
        // border: 'solid 1px black',
        display: 'flex',
        justifyContent: 'space-between'
    },
    tableContainer: {
        padding: '20px 0px'
    },
    formLabel: {
        // border: 'solid 1px black',
        fontFamily: `${RootCss.fonts.mainFont}`,
        color: `${RootCss.colors.primaryDarkColor}`,
        fontSize: '16px',
        fontWeight: '700',
        padding: '0px 0px 15px 0px'
    },
    formInput: {
        // border: 'solid 1px black',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '12px'
    },
    searchInput: {
        display: 'flex',
        width: '250px',
    },
    seachMessage: {
        color: 'red',
        fontWeight: '500',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '20px'
    },
    halfInputs: {
        width: '48%',
    },
    thirdsInputs: {
        width: '32%'
    },
    inputs: {
        width: '100%'
    },

    // qr id 
    qrIDmodal: {
        // border: 'solid 1px red',
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100%',
        width: '100vw',
        display: 'flex',
        // display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: 'auto',
        background: 'linear-gradient(rgba(0,0,0,0.4) , rgba(0,0,0,0.4))',
        zIndex: '2',
        boxSizing: 'border-box'
    },
    qrIDcontainer: {
        // border: 'solid 1px black',
        // background: '#1D1D1D',
        // background: '#f6f6f6',
        // width: '207px',
        // height: '420px',
        // width: '248px',
        // height: '504px',
        width: '296px', //a7
        height: '420px', //a7
        display: 'flex',
        flexDirection: 'column',
        // transform: 'scale(0.3)',mobileBreakpoint tabletBreakpoint
        boxSizing: 'border-box',
        // [tabletBreakpoint] : {
        //     width: '314px',
        //     height: '540px',
        // },
        // [mobileBreakpoint] : {
        //     width: '314px',
        //     height: '540px',
        // },
    },
    qrIDheader: {
        // border: 'solid 1px black',
        // padding: '10px 0px',
        // height: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box'
    },
    qrIDlogoTopContainer: {
        // border: 'solid 1px black',
        display: 'flex',
        width: '100%',
        padding: '10px',
        justifyContent: 'center',
        boxSizing: 'border-box'
    },
    qrIDlogoContainer: {
        // border: 'solid 1px black',
        height: '40px',
        padding: '4px 5px',
        boxSizing: 'border-box'
    },
    qrIDlogo: {
        // border: 'solid 1px black',
        height: '100%',
        padding: '0px 10px',
        boxSizing: 'border-box'
    },
    qrIDbody: {
        // border: 'solid 1px red',
        display: 'flex',
        flex: '1',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
    },
    qrIDqrCodeContainer: {
        // border: 'solid 1px red',
        // width: '100%',
        // position: 'absolute',
        // top: '285px',
        padding: '25px 0px 0px 0px',
        boxSizing: 'border-box'
    },
    qrIDqrCode: {
        // border: 'solid 1px black',
        height: '100px',
        width: '100px',
        boxSizing: 'border-box'
    },
    qrIDnameContainer: {
        // border: 'solid 1px red',
        display: 'flex',
        // position: 'absolute',
        // top: '410px',
        bozSizing: 'border-box'
    },
    qrIDname: {
        // border: 'solid 1px black',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '20px',
        // padding: '20px',
        height: '167px',
        marginTop: '6px',
        // position: 'absolute',
        // top: '350px',
        // flex: '1',
        width: '100%',
        fontWeight: '400',
        // color: `${RootCss.colors.primaryDarkColor}`,
        // color: '#d9d9d9',
        color: '#1d1d1d',
        textAlign: 'center',
        boxSizing: 'border-box',
    },
    qrIDlogoFooterContainer: {
        // border: 'solid 1px red',
        // display: 'flex',
        width: '100%',
        padding: '0px 0px 10px 0px',
        justifyContent: 'center',
        boxSizing: 'border-box'
    },
    qrIDlogoFooter: {
        // border:' solid 1px black',
        display: 'flex',
        justifyContent: 'center',
        height: '40px',
        padding: '4px 5px',
        boxSizing: 'border-box'
    },
    qrIDonDisplay: {
        padding: '0px 70px',
        // display: 'flex',
        // border: 'solid 1px black',
        flex: '1',
        boxSizing: 'border-box'
    },
    viewModalLabel: {
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '12px',
        color: `${RootCss.colors.primaryColor}`,
        padding: '10px 0px 0px 0px',
        lineHeight: '2px'
    },
    viewModalDetails: {
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '14px',
        color: '#777'
        // lineHeight: '18px'
    },
    modalMessage: {
        // border: 'solid 1px black',
        padding: '0px 0px 10px 0px',
        fontFamily: `${RootCss.fonts.mainFont}`,
        color: `${RootCss.colors.primaryDarkColor}`,
        fontSize: '16px',
        boxSizing: 'border-box'
    }
}