import { RootCss } from "../../../rootCss/RootCss";

export const DashboardCss = {
    wrapper: {
        // border: 'solid 1px black',
        display: 'flex',
        flex: '1',
        width: '100%',
        // height: '100%',
        flexDirection: 'column'
    },
    label: {
        // border: 'solid 1px black',
        display: 'flex',
        fontFamily: `${RootCss.fonts.mainFont}`,
        color: `${RootCss.colors.secondaryDarkColor}`,
        boxSizing   : 'border-box'
    },
    counting: {
        // border: 'solid 1px black',
        fontFamily: `${RootCss.fonts.mainFont}`,
        color: `${RootCss.colors.primaryColor}`,
        fontSize: '240px',
        lineHeight: '220px',
        boxSizing   : 'border-box'
    },
    mainContainer: {
        // border: 'solid 1px black',
        // margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 0px 0px 0px',
        boxSizing   : 'border-box'
    }
}