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


const useStyles = makeStyles(theme => ({
    heading:{
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop:"0.5em"
    },
    mainContainer:{
        paddingLeft:"5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em"
    },
    itemContainer:{
        maxWidth: "40em"
    }
}))

const CustomSoftware = (props) => {
    const classes = useStyles()
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
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row">
                <Grid item className={classes.arrowContainer} style={{marginRight:"1em", marginLeft: "-3.5em"}}>
                    <IconButton style={{backgroundColor:"transparent"}} component={Link} to="/services" onClick={()=> props.setSelectedIndex(0)}>
                        <img src={backArrow} alt="back to services"/>
                    </IconButton>
                </Grid>
            
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography variant="h2">
                        Custom software development
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph>
                        Custom software development infortmation can be entered here
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Custom software development infortmation can be entered here
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Custom software development infortmation can be entered here
                    </Typography>
                </Grid>                
            </Grid>
                <Grid item className={classes.arrowContainer}>
                    <IconButton  style={{backgroundColor:"transparent"}} component={Link} to="/mobileApps" onClick={()=> props.setSelectedIndex(2)}>
                        <img src={forwardArrow} alt="forward to mobile app dev"/>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container="row" justify="center" style={{marginTop:"15em", marginBottom: "20em"}}>
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
                <Grid item container="column" md alignItems="center" style={{maxWidth:"40em"}}>
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
            <Grid item container direction="row" justify="space-around">
                <Grid item container className={classes.itemContainer} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4">
                                Data and info
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                insights
                            </Typography>
                            <Typography variant="body1" paragraph>
                                data
                            </Typography>
                            <Typography variant="body1" paragraph>
                                projections
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer}>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth: 280}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right">
                                protection
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align="right" paragraph>
                                insights
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item container direction="row" style={{marginTop:"20em", marginBottom:"20em"}}> 
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={roots} alt="tree" height="450em" width="450em"/>
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
            <Grid item container direction="row" justify="space-around">
                <Grid item container className={classes.itemContainer} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4">
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                insights
                            </Typography>
                            <Typography variant="body1" paragraph>
                                data
                            </Typography>
                            <Typography variant="body1" paragraph>
                                projections
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} style={{maxHeight: 290, maxWidth: 280}}/>
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer}>
                    <Grid item md>
                        <Lottie options={uxOptions} style={{maxHeight: 310, maxWidth: 155}}/>
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right">
                                User experience
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align="right" paragraph>
                                insights
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
