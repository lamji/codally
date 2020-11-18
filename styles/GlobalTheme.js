import {createMuiTheme} from "@material-ui/core/styles";

// GENERAL COLORS
const aurelioOrange = "#F29F05";

// SECONDARY COLORS
const mainSecondaryColor = "#2F2F2F"
const lightSecondaryColor = "#FFFFFF"
const darkSecondaryColor = "#272727"

// INFO COLORS
const mainInfoColor = "#868686"
const lightInfoColor = "#FAFAFA"
const darkInfoColor = "#242424"

// TEXT COLORS
const primaryTextColor = "#3549AA"
const secondaryTextColor = "#939090"

const theme = createMuiTheme({
  shadows: ["none"],
    palette: {
        primary: {
            light: `${aurelioOrange}`,
            main: `${aurelioOrange}`,
            dark: `${aurelioOrange}`
        },

        secondary: {
            light: `${lightSecondaryColor}`,
            main: `${mainSecondaryColor}`,
            dark: `${darkSecondaryColor}`
        },

        info: {
            light: `${lightInfoColor}`,
            main: `${mainInfoColor}`,
            dark: `${darkInfoColor}`
        },

        text: {
            primary: `${primaryTextColor}`,
            secondary: `${secondaryTextColor}`
        }
    },

    breakpoints: {
        xs: 0,
        xxs: 360,
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1440,
        xxl: 2560,
    },

    typography: {
        textTransform: 'none',
        textDecoration: 'none',
        color: primaryTextColor,
        fontFamily: [
            'Nunito',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
          ].join(','),
        margin: ".5rem 0"
    },

    padding: {
        paddingVertical: "5vh",
        paddingHorizontal: "5vh"
    },

    overrides: {
        MuiInputLabel: {
            root: {
                fontFamily: "Nimbus Sans L",
                fontSize: "1.15rem",
                color: secondaryTextColor
            },
        },
        MuiInput:{
            root:{
                borderRadius: 0,
                border: `1px solid ${secondaryTextColor}`,
                fontSize: 16,
            }
        },
        MuiOutlinedInput:{
            root:{
                borderRadius: "100px"
            },
            input:{
                padding: "12px",
            },
        },
        MuiSvgIcon:{
            root:{
                width: "50px",
                height: "50px",
                padding: "5px"
            }
        }
    }
})

theme.typography.h1 = {
    ...theme.typography,
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "57px",
    fontFamily: "SF Pro Display",

    

    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '10vw'
    // },
    // [theme.breakpoints.down('md')]: {
    //     fontSize: '5.2rem'
    // },
    // [theme.breakpoints.down('sm')]: {
    //     fontSize: '4.5rem'
    // },
    //
    // [theme.breakpoints.down('xs')]: {
    //     fontSize: '3.5rem'
    // },
    // [theme.breakpoints.down('xxs')]: {
    //     fontSize: '3rem'
    // }
}

theme.typography.h2 = {
    ...theme.typography,
    fontSize: "5vw",
    fontWeight: "bold",
    // [theme.breakpoints.down('md')]: {
    //     fontSize: '3.5rem'
    // },
    // [theme.breakpoints.down('sm')]: {
    //     fontSize: '2.5rem'
    // },
    //
    // [theme.breakpoints.down('xs')]: {
    //     fontSize: '2rem'
    // }
}


theme.typography.h3 = {
    ...theme.typography,
    padding: theme.spacing(2),
    fontSize: "2rem",
    margin: "0 auto",
    textAlign: 'center',
    width: "50%",
    color: theme.palette.text.primary,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
      width: "250px",
      fontSize: "1.5rem"
    },
}

theme.typography.h4 = {
    ...theme.typography,
    fontSize: "2.57rem",
    fontWeight: "bold",
    [theme.breakpoints.down('sm')]: {
        fontSize: '2.28rem'
    },

    [theme.breakpoints.down('xs')]: {
        fontSize: '1.71rem'
    }
}

theme.typography.h5 = {
    ...theme.typography,
    fontSize: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem'
    },

    [theme.breakpoints.down('xs')]: {
        fontSize: '1.286rem'
    }
}

theme.typography.h6 = {
    ...theme.typography,
    fontSize: "1.286rem",
    fontWeight: "bold",
    [theme.breakpoints.up('xl')]: {
        fontSize: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem'
    },

    [theme.breakpoints.down('xs')]: {
        fontSize: '1rem'
    }
}

theme.typography.body1 = {
    ...theme.typography.h6,
    fontWeight: "normal",
    fontSize: "18px"
}

theme.typography.body2 = {
    ...theme.typography,
    fontWeight: "normal",
    fontSize: "1rem",
    margin: "0 0",
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.85rem',
        fontWeight: "normal",
    },

    [theme.breakpoints.down('xs')]: {
        fontSize: '0.78rem'
    }
}

theme.typography.caption = {
    ...theme.typography,
    fontWeight: "bold",
    fontSize: "0.9rem",
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem'
    },
}

theme.typography.button = {
    fontSize: "18px",
    fontWeight: "normal",
    color: "primary",
    [theme.breakpoints.up('lg')]: {
        fontSize: '15px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem'
    },
}

export default theme