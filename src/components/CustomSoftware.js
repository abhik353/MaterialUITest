import React from 'react'
import Lottie from 'react-lottie'
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ButtonArrow from './ui/ButtonArrow'
import IconButton from '@material-ui/core/IconButton'
import backArrow from '../assets_1/backArrow.svg' 
import forwardArrow from '../assets_1/forwardArrow.svg' 
import lightbulb from '../assets_1/bulb.svg'
import cash from '../assets_1/cash.svg' 
import stopwatch from '../assets_1/stopwatch.svg' 
import documentsAnimation from '../animations_1/documentsAnimation/data'
import scaleAnimation from '../animations_1/scaleAnimation/data.json'
import roots from '../assets_1/root.svg'
import automationAnimation from '../animations_1/automationAnimation/data.json'
import uxAnimation from '../animations_1/uxAnimation/data'
import Hidden from '@material-ui/core/Hidden'
import CallToAction from './ui/CallToAction'


const useStyles = makeStyles(theme => ({
    heading:{
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop:"0.5em"
    },
    rowContainer:{
        paddingLeft:"5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]:{
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    itemContainer:{
        maxWidth: "40em"
    }
}))

const CustomSoftware = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const documentsOptions = {
        loop: true,
        autoplay: false, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const scaleOptions = {
        loop: true,
        autoplay: false, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const automationOptions = {
        loop: true,
        autoplay: false, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const uxOptions = {
        loop: true,
        autoplay: false, 
        animationData: uxAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column" >
            <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop : matchesXS ? "1em" : "2em"}}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src={backArrow} alt="back to services" />
                        </IconButton>
                    </Grid>
                </Hidden>                
            
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant="h2">
                        Custom software development
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        Custom software development infortmation can be entered here
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        Custom software development infortmation can be entered here
                    </Typography>
                    <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                        Custom software development infortmation can be entered here
                    </Typography>
                </Grid>                
            </Grid>
            <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
                    <IconButton  style={{backgroundColor:"transparent"}} component={Link} to="/mobileApps" onClick={()=> props.setSelectedIndex(2)}>
                        <img src={forwardArrow} alt="forward to mobile app dev"/>
                    </IconButton>
                </Grid>
            </Hidden>
                
            </Grid>
            <Grid item container="row" justify="center" style={{marginTop:"15em", marginBottom: "20em"}} className={classes.rowContainer}>
                <Grid item container="column" md alignItems="center" style={{maxWidth:"40em"}}>
                    <Grid item>
                        <Typography variant="h4">
                            save world
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="lightbulb"/>
                    </Grid>
                </Grid>
                <Grid item container="column" md alignItems="center" style={{maxWidth:"40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0}}>
                    <Grid item>
                        <Typography variant="h4">
                            save time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash"/>
                    </Grid>
                </Grid>
                <Grid item container="column" md alignItems="center" style={{maxWidth:"40em"}}>
                    <Grid item>
                        <Typography variant="h4">
                            save time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container alignItems={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} justify="space-around" className={classes.rowContainer}>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} style={{marginBottom : matchesMD ? "15em" : 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                                Data and info
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                insights
                            </Typography>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                data
                            </Typography>
                            <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                                projections
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} >
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth: 280}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                                protection
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                insights
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item container direction="row" style={{marginTop:"20em", marginBottom:"20em"}} className={classes.rowContainer}> 
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={roots} alt="tree" height={ matchesSM ? "300em" : "450em"} width={ matchesSM ? "300em" : "450em"}/>
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant="h4" align="center" gutterBottom>
                            RCA
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            issues and fix
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container alignItems={matchesMD ? "center" : undefined} direction={matchesMD ? "column" : "row"} justify="space-around" style={{marginBottom:"20em"}} className={classes.rowContainer}>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"}  style={{marginBottom : matchesMD ? "15em" : 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                                insights
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                                data
                            </Typography>
                            <Typography variant="body1" align={matchesSM ? "center" : undefined} paragraph>
                                projections
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} style={{maxHeight: 290, maxWidth: 280}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"} >
                    <Grid item md>
                        <Lottie options={uxOptions} style={{maxHeight: 310, maxWidth: 155}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                                User experience
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesSM ? "center" : "right"} paragraph>
                                insights
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item >
                <CallToAction setValue = {props.setValue}/>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
