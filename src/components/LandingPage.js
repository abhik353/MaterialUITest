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
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import revolutionBackground from '../assets_1/repeatingBackground.svg'
import infoBackground from '../assets_1/infoBackground.svg'
import CallToAction from './ui/CallToAction'
import {Link} from 'react-router-dom'

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
  },
  revBackground:{
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSze: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  rev:{
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: "10",
    padding: "10em",
    [theme.breakpoints.down("sm")]:{
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingleft: "8em",
      paddingRight: "8em",
      borderRadius: 0,
      width: "100%"
    }
  },
  infoBackground:{
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSze: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }
  
}))

const LandingPage = (props) =>{
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const defaultOptions = {
        loop: true,
        autoplay: false, 
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
                        <Button className={classes.estimateButton} component={Link} to="/estimate" variant="contained" onClick={() => props.setValue(5)}>Estimate</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" className={classes.showMoreButton} component={Link} to="/info" onClick={() => props.setValue(2)}><span style={{marginRight:10}}>info</span>
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
                <Grid container direction = "row" justify = {matchesSM ? "center" : undefined} className={classes.serviceContainer}>
                  <Grid item style={{marginLeft : matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                      custom software development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                      subtitle 1
                    </Typography>
                    <Typography variant="subtitle1">
                      subtitle 2
                    </Typography>
                    <Button component={Link} to="/customSoftware" variant="outlined" className={classes.showButton} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
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
                <Grid container direction = "row" justify = {matchesSM ? "center" : "flex-end"} className={classes.serviceContainer}>
                  <Grid item style={{marginLeft : matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                      Mobile apps development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                      subtitle 1 {matchesSM ? null : <br/>}
                    </Typography>
                    <Typography variant="subtitle1">
                      subtitle 2
                    </Typography>
                    <Button component={Link} to="/mobileApps" variant="outlined" className={classes.showButton} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                      <span style={{marginRight:10}}>show more</span>
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.cyan}/>
                    </Button>
                  </Grid>
                  <Grid item style={{marginRight : matchesSM ? 0 : "5em"}}>
                    <img alt="custom s/w icon" className={classes.icon} src={MobileAppsIcon}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item> {/* ---- services/website block ----- */}
                <Grid container direction = "row" justify = {matchesSM ? "center" : undefined} className={classes.serviceContainer}>
                  <Grid item style={{marginLeft : matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                    <Typography variant="h4">
                      custom software development
                    </Typography>
                    <Typography variant="subtitle1" className={classes.subtitle}>
                      subtitle 1
                    </Typography>
                    <Typography variant="subtitle1">
                      subtitle 2
                    </Typography>
                    <Button component={Link} to="/website" variant="outlined" className={classes.showButton} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                      <span style={{marginRight:10}}>show more</span>
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.cyan}/>
                    </Button>
                  </Grid>
                  <Grid item>
                    <img alt="website icon" className={classes.icon} src={websiteIcon}/>
                  </Grid>
                </Grid>
              </Grid>
              {/* info block */}
              <Grid item>
                <Grid container style={{height: "100em", marginTop: "12em"}} alignItems="center" justify="center"> 
                <Card className={classes.rev}>
                  <CardContent>
                    <Grid container direction="column" style={{textAlign: "center"}}>
                      <Grid item>
                        <Typography variant="h3" gutterBottom>
                          Info
                        </Typography>
                      </Grid>
                      <Grid item >
                        <Typography variant="subtitle1">
                            info 1  
                        </Typography>
                        <Button component={Link} to="/info" variant="outlined" className={classes.showMoreButton} onClick={() => props.setValue(2)}><span style={{marginRight:10}}>show more</span>
                          <ButtonArrow width={15} height={15} fill={theme.palette.common.cyan}/>
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <div className={classes.revBackground}/>
                </Grid>
                
              </Grid>
              <Grid item>
                {/* about block */}
                <Grid container style={{height:"80em"}} alignItems="center" direction ="row"  className={classes.infoBackground}>
                  <Grid item container style={{ textAlign:matchesXS ? "center" : "inherit"}} direction={matchesXS ? "column" : "row"}>
                  <Grid item sm style={{marginLeft: matchesXS ? 0 :  matchesSM ? "2em":"5em"}}>
                    <Grid container style={{marginBottom: matchesXS ? "10em" : 0}} direction="column">
                      <Typography variant="h2" style={{color: "white"}}>
                        About us
                      </Typography>
                      <Typography variant="subtitle2">
                        about us information
                      </Typography>
                      <Grid item>
                      <Button component={Link} to="/about" variant="outlined" style={{color:"white",borderColor:"white"}} className={classes.showMoreButton} onClick={() => props.setValue(3)}><span style={{marginRight:10}}>show more</span>
                          <ButtonArrow width={15} height={15} fill="white"/>
                        </Button>
                        </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sm style={{marginRight: matchesXS? 0 : matchesSM ? "2em":"5em", textAlign:matchesXS ? "center" : "right"}}>
                    <Grid container direction="column">
                      <Typography variant="h2" style={{color: "white"}}>
                        Contact us
                      </Typography>
                      <Typography variant="subtitle2">
                        contact us information <span role="img" aria-label="eye">👁️‍🗨️ </span>
                      </Typography>
                      <Grid item>
                      <Button component={Link} to="/contact" variant="outlined" style={{color:"white",borderColor:"white"}} className={classes.showMoreButton} onClick={() => props.setValue(4)}><span style={{marginRight:10}}>show more</span>
                          <ButtonArrow width={15} height={15} fill="white"/>
                        </Button>
                        </Grid>
                    </Grid>
                  </Grid>
                  </Grid>
                  
                </Grid>
              </Grid>
              <Grid item>
                {/*call to action block*/}
                <CallToAction setValue={props.setValue}/>
              </Grid>
            </Grid>
            )
}

export default LandingPage
