import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles,useTheme} from '@material-ui/core/styles'
import animationData from '../animations_1/landinganimation/data'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonArrow from '../components/ui/ButtonArrow'
import { Typography } from '@material-ui/core'
import customSoftwareIcon from '../assets_1/Custom Software Icon.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import MobileAppsIcon from '../assets_1/mobileIcon.svg'
import websiteIcon from '../assets_1/websiteIcon.svg'

const useStyles = makeStyles(theme => ({
  animation:{
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]:{
      maxWidth: "30em"
    }
  },
  estimateButton:{
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover":{
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer:{
    marginTop:"1em"
  },
  showMoreButton:{
    ...theme.typography.showButton,    
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  showButton:{
    ...theme.typography.showButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]:{
      marginBottom: "2em"
    }
  },
  mainContainer:{
    marginTop: "5em",
    [theme.breakpoints.down("md")]:{
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]:{
      marginTop: "2em"
    }
  },
  heroTextContainer:{
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]:{
      marginLeft: 0
    }
  },
  subtitle:{
    marginBottom: "1em"
  },
  icon:{
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]:{
      marginLeft: "0"
    }
  },
  serviceContainer:{
    marginTop: "12em",
    [theme.breakpoints.down("sm")]:{
      padding: 25
    }
  }
}))

const LandingPage = () =>{
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("sm"))
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
            <Grid container direction="column" className={classes.mainContainer}>
              <Grid item> {/* ----------- hero block ------ */}
                <Grid container justify="flex-end" alignItems="center" direction = "row">
                  <Grid sm item className={classes.heroTextContainer}>
                    <Typography variant="h2" align="center">
                      item 1
                    </Typography>
                    <Grid container justify="center" className={classes.buttonContainer}>
                      <Grid item>
                        <Button className={classes.estimateButton} variant="contained">Estimate</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" className={classes.showMoreButton}><span style={{marginRight:10}}>show more</span>
                          <ButtonArrow width={15} height={15} fill={theme.palette.common.cyan}/>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid sm className={classes.animation} item>
                    <div><Lottie options={defaultOptions} height={"100%"} width={"100%"}/></div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item> {/* ---- services/custom software block ----- */}
                <Grid container direction = "row" justify = {matches ? "center" : undefined} className={classes.serviceContainer}>
                  <Grid item style={{marginLeft : matches ? 0 : "5em", textAlign: matches ? "center" : undefined}}>
                    <Typography variant="h4">
                      custom software development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                      subtitle 1
                    </Typography>
                    <Typography variant="subtitle1">
                      subtitle 2
                    </Typography>
                    <Button variant="outlined" className={classes.showButton}>
                      <span style={{marginRight:10}}>show more</span>
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.cyan}/>
                    </Button>
                  </Grid>
                  <Grid item>
                    <img alt="custom s/w icon" className={classes.icon} src={customSoftwareIcon}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item> {/* ---- services/mobile apps block ----- */}
                <Grid container direction = "row" justify = {matches ? "center" : "flex-end"} className={classes.serviceContainer}>
                  <Grid item style={{marginLeft : matches ? 0 : "5em", textAlign: matches ? "center" : undefined}}>
                    <Typography variant="h4">
                      Mobile apps development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                      subtitle 1 {matches ? null : <br/>}
                    </Typography>
                    <Typography variant="subtitle1">
                      subtitle 2
                    </Typography>
                    <Button variant="outlined" className={classes.showButton}>
                      <span style={{marginRight:10}}>show more</span>
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.cyan}/>
                    </Button>
                  </Grid>
                  <Grid item style={{marginRight : matches ? 0 : "5em"}}>
                    <img alt="custom s/w icon" className={classes.icon} src={MobileAppsIcon}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item> {/* ---- services/website block ----- */}
                <Grid container direction = "row" justify = {matches ? "center" : undefined} className={classes.serviceContainer}>
                  <Grid item style={{marginLeft : matches ? 0 : "5em", textAlign: matches ? "center" : undefined}}>
                    <Typography variant="h4">
                      custom software development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                      subtitle 1
                    </Typography>
                    <Typography variant="subtitle1">
                      subtitle 2
                    </Typography>
                    <Button variant="outlined" className={classes.showButton}>
                      <span style={{marginRight:10}}>show more</span>
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.cyan}/>
                    </Button>
                  </Grid>
                  <Grid item>
                    <img alt="website icon" className={classes.icon} src={websiteIcon}/>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
            )
}

export default LandingPage
