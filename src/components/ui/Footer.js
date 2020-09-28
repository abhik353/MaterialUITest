import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import footerAdornment from '../../assets/react.svg'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden'
import facebook from '../../assets/logo-facebook.svg'
import twitter from '../../assets/logo-twitter.svg'
import instagram from '../../assets/logo-instagram.svg'

const useStyles = makeStyles(theme => ({
    footer:{
        backgroundColor: theme.palette.common.cyan,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment:{
        width: "12em",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]: {
            width: "10em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "8em"
        }
    },
    mainContainer:{
        position: "absolute"
    },
    link:{
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem:{
        margin: "2.5em"
    },
    icon:{
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]:{
            height: "2em",
            width: "2em"
        }
    },
    socialContainer:{
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]:{
            right: "0.6em"
        }
    }
}))

const Footer = ({value, setValue, selectedIndex, setSelectedIndex}) => {

    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/" onClick={()=> setValue(0)} className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/services" onClick={() => setValue(1)} className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} to="/customSoftware" onClick={() => {setValue(1);setSelectedIndex(1)}} className={classes.link}>
                            custom s/w development
                        </Grid>
                        <Grid item component={Link} to="/mobileApps" onClick={() => {setValue(1);setSelectedIndex(2)}} className={classes.link}>
                            mobile dev
                        </Grid>
                        <Grid item component={Link} to="/websites" onClick={() => {setValue(1);setSelectedIndex(3)}} className={classes.link}>
                            website dev
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/info" onClick={() => setValue(2)} className={classes.link}>
                            info
                        </Grid>
                        <Grid item className={classes.link}>
                            what we do
                        </Grid>
                        <Grid item className={classes.link}>
                            products
                        </Grid>
                        <Grid item className={classes.link}>
                            clients
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/about" onClick={() => setValue(3)} className={classes.link} >
                            About us
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/contact" onClick={() => setValue(4)} className={classes.link}>
                            Contact us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
           
            <img alt="footer logo" src={footerAdornment} className={classes.adornment}/>
            <Grid container justify={"flex-end"} className={classes.socialContainer} spacing={3}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" >
                    <img alt="facebook logo" src={facebook} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src={twitter} className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" src={instagram} className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
