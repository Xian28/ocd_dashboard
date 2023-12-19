import { RootCss } from "../../../rootCss/RootCss";

export const HomeMainCss = {
    wrapper: {
        // border: 'solid 1px black',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        minHeight: '100vh',
        maxHeight: '100vh',
        boxSizing: 'border-box',
        overflow: 'auto'
    },
    header: {
        // border: 'solid 1px black',
        display: 'flex',
        height: '70px',
        width: '100%',
        background: `${RootCss.colors.primaryDarkColor}`,
        // boxSizing: 'border-box'
    },
    subHeaderContainer: {
        // border: 'solid 1px black',
        padding: '0px 20px',
        display: 'flex',
        flex: '1',
        justifyContent: 'end',
        alignItems: 'center',
    },
    sidebarHeaderContainer: {
        padding: '0px 20px',
        // border: 'solid 1px black',
        display: 'flex',
        width: '250px',
        alignItems: 'center',
    },
    menuContainer: {
        // border: 'solid 1px black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        boxSizing: 'border-box',
        marginRight: '10px'
    },
    sidebarLogo: {
        // border: 'solid 1px black',
        // width: '40px',
        height: '40px',
        
        padding: '4px',
        boxSizing: 'border-box'
    },
    sidebarSystemname: {
        // border: 'solid 1px black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 10px',
        height: '40px',
        lineHeight: '16px',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '20px',
        // fontWeight: 'bold',
        // color: `${RootCss.colors.primaryColor}`
        color: 'white',
    },
    avatar: {
        background: `${RootCss.colors.adminPrimaryColor}`,
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover' : {
            background: `${RootCss.colors.adminPrimaryColorHover}`,
        }
    },
    bodyContainer: {
        // border: 'solid 1px black',
        flex: '1',
        display: 'flex',
    },
    sidebarWrapper: {
        // border: 'solid 1px black',
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        padding: '0px 20px',
        background: `${RootCss.colors.primaryDarkColor}`,
        transition: '0.3s',
    },
    contentContainer: {
        // border: 'solid 10px red',
        flex: '1',
        background: '#ffffff',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 70px)',
        overflow: 'auto',
        boxSizing: 'border-box'
    },
    pageTitle: {
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontWeight: '600',
        fontSize: '20px',
        padding: '0px 0px 20px 0px',
    },
    sideBarMenuContainer: {
        // border: 'solid 1px white',
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: '0.1s',
        '&:hover': {
            background: `${RootCss.colors.adminPrimaryColorHover}`,
        }
    },
    iconContainer: {
        // border: 'solid 1px white',
        minWidth: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelContainer: {
        // border: 'solid 1px white',
        flex: '1',
        color: 'white',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '14px',
        padding: '0px 0px 0px 10px',
        whiteSpace: 'nowrap'
    },
    subLabelContainer: {
        // border: 'solid 1px white',
        flex: '1',
        color: 'white',
        fontFamily: `${RootCss.fonts.mainFont}`,
        fontSize: '16px',
        whiteSpace: 'nowrap',
        padding: '0px 0px 0px 10px'
    },
    avatarMenuContainer: {
        minWidth: '200px',
        // padding: '10px'
    },
    avatarMenu: {
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'flex-start',
        minWidth: '150px',
        transition: '0.2s',
        '&:hover': {
            background: '#eee'
        }
    },
    formInput: {
        width: '100%',
        marginBottom: '10px',
    },
}