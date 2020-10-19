import React from 'react'
import Lottie from 'react-lottie'
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import backArrow from '../assets_1/backArrow.svg' 
import forwardArrow from '../assets_1/forwardArrow.svg' 
import swiss from '../assets_1/swissKnife.svg' 
import engagement from '../assets_1/increaseEngagement.svg'
import access from '../assets_1/extendAccess.svg'
import integrationAnimation from '../animations_1/integrationAnimation/data.json'
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
}))
 
const MobileApps = (props) => {
        const classes = useStyles()
        const theme = useTheme()
        const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
        const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
        const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: integrationAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        }
        return(
            <Grid container direction="column">
                <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop : matchesXS ? "1em" : "2em"}}>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/customSoftware" onClick={() => props.setSelectedIndex(0)}>
                            <img src={backArrow} alt="back to custom s/w" />
                        </IconButton>
                    </Grid>
                </Hidden>                
            
            <Grid item container direction="column" className={classes.heading}>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant="h2">
                        MobileApps development
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
                    <IconButton  style={{backgroundColor:"transparent"}} component={Link} to="/website" onClick={()=> props.setSelectedIndex(2)}>
                        <img src={forwardArrow} alt="forward to website dev"/>
                    </IconButton>
                </Grid>
            </Hidden>
                
            </Grid>
            <Grid item container direction={matchesSM ? "column" : "row"} style={{marginTop: "15em", marginBottom: "15em"}} className={classes.rowContainer}>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                            Integration
                        </Typography>
                    </Grid>  
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            integration 1
                        </Typography>    
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            integration 2    
                        </Typography>   
                    </Grid>                  
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} style={{maxWidth: "20em"}}/>
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="h4" gutterBottom>
                            platfrom support
                        </Typography>
                    </Grid>  
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                            integration 1
                        </Typography>    
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                            integration 2    
                        </Typography>   
                    </Grid>                  
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} style={{marginBottom: "15em"}} className={classes.rowContainer}>
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>                        
                        <Typography align="center" variant="h4" gutterBottom>Extend func</Typography>
                    </Grid>                
                <Grid item>
                    <img src ={swiss} alt="swiss army knife"/>
                </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{marginTop:matchesMD ?  "10em" : 0 , marginBottom: matchesMD ?  "10em" : 0}}>
                    <Grid item>                        
                        <Typography align="center" variant="h4" gutterBottom>Extend access</Typography>
                    </Grid>                
                <Grid item>
                    <img src ={access} alt="swiss army knife" style={{ maxWidth:  matchesXS ? "20em" : "28em"}}/>
                </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center">
                    <Grid item>                        
                        <Typography align="center" variant="h4" gutterBottom>Extend engagement</Typography>
                    </Grid>                
                <Grid item>
                    <img src ={engagement} alt="swiss army knife"/>
                </Grid>
                </Grid>
                </Grid>
                <Grid item>
                    <CallToAction setValue={props.setValue}/>
                </Grid>
            </Grid>
        )
}

export default MobileApps