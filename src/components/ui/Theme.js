import { createMuiTheme } from '@material-ui/core/styles';

const mtCyan = "#008B8B"
const mtOrange = "#FFBA60"

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
        h3:{
            fontWeight: 300
        },
        tab: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "darkblue"
        }
    },
    
})