import { createMuiTheme } from '@material-ui/core/styles';

const mtCyan = "#008B8B"
const mtOrange = "#FFBA60"
const mtGrey = "#868686"

export default createMuiTheme({
    palette:{
        common:{
            cyan: `${mtCyan}`,
            orange: `${mtOrange}`
        },
        primary:{
            main: `${mtCyan}`
        },
        secondary:{
            main: `${mtOrange}`
        }
    },

    typography:{
        h2:{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: "2.5rem",
            color: `${mtCyan}`,
            lineHeight: 1.5
        },
        h3:{
            fontFamily: 'Pacifico',
            fontSize: "2.5rem",
            color: mtCyan,
            fontWeight: 300
        },
        h4:{
            fontFamily: 'Raleway',
            fontSize: "1.75rem",
            color: `${mtCyan}`,
            fontWeight: 700,
            lineHeight: 1.5
        },
        subtitle1:{
            fontSize: "1.25rem",
            fontWeight: 300,
            color: mtGrey
        },
        subtitle2:{
            color:"white",
            fontSize: "1.25rem",
            fontWeight: 300
        },
        body1:{
            fontSize: "1.25rem",
            color: mtCyan,
            fontWeight: 300
        },
        tab: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: "1rem",
            color:"white"
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "darkblue"
        },
        showButton: {
            borderColor: mtCyan,
            color: mtCyan,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: mtCyan,
                fontSize: "1rem"
            }
        },
        MuiInput : {
            root:{
                color: mtGrey,
                fontWeight: 300
            },
            underline:{
                "&:before": {
                    borderBottom: `2px solid ${mtCyan}`
                },
                "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom: `2px solid ${mtCyan}`
                }
            }
        } 
    }
})