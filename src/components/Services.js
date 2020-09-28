import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ButtonArrow from './ui/ButtonArrow'
import customSoftwareIcon from '../assets_1/Custom Software Icon.svg'
import MobileAppsIcon from '../assets_1/mobileIcon.svg'
import websiteIcon from '../assets_1/websiteIcon.svg'

const useStyles = makeStyles(theme => ({
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
      showButton:{
        ...theme.typography.showButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]:{
          marginBottom: "2em"
        }
      }
}))

const Services = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return ( 
        <Grid container direction = "column" style={{marginLeft: matchesSM? 0: "5em", marginTop: matchesSM? "1em": "2em"}}>
          <Grid item>
            <Typography align={matchesSM ? "center" : undefined} variant="h2" gutterBottom >
              Services
            </Typography>
          </Grid>
            <Grid item> {/* ---- services/mobile apps block ----- */}
                <Grid container direction = "row" justify = {matchesSM ? "center" : "flex-end"} className={classes.serviceContainer} style={{marginTop: matchesSM? "1em":"5em"}}>
                  <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM? undefined : "35em"}}>
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
                    <img alt="custom s/w icon" className={classes.icon} src={MobileAppsIcon} width = "250em"/>
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
              
              <Grid item> {/* ---- services/website block ----- */}
                <Grid container direction = "row" justify = {matchesSM ? "center" : "flex-end"} className={classes.serviceContainer} style={{marginBottom:"5em"}}>
                  <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM? undefined : "35em"}}>
                    <Typography variant="h4">
                      Website development
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
                  <Grid item style={{marginRight : matchesSM ? 0 : "5em"}}>
                    <img alt="website icon" className={classes.icon} src={websiteIcon} width="250em"/>
                  </Grid>
                </Grid>
              </Grid>
        </Grid>
    )
}

export default Services
