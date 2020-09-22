import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonArrow from './ButtonArrow'
import background from '../../assets_1/background.jpg'
import mobileBackground from '../../assets_1/mobileBackground.jpg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    showMoreButton:{
        ...theme.typography.showButton,    
        fontSize: "0.9rem",
        height: 45,
        width: 145
      },
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSze: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        backgroundAttachment: "fixed",
        [theme.breakpoints.down("md")]:{
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: "inherit"
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        marginTop: "1em",
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
          },
        [theme.breakpoints.down("sm")]:{
            marginLeft: 0,
            marginRight: 0
        }
    }
}))
 
const CallToAction = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid container alignItems="center" justify={matchesSM ? "center" : "space-between"} className={classes.background} direction={matchesSM ? "column" : "row"}>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM? "center" : "inherit"}}>
                <Grid container firection="column">
                    <Grid item>
                        <Typography variant="h2">
                            wonderful experience
                        </Typography>
                        <Typography variant="subtitle1">
                            subtitle 1
                        </Typography>
                        <Grid container justify={matchesSM ? "center" : undefined} item>
                        <Button component={Link} to="/about" variant="outlined" className={classes.showMoreButton} onClick={() => props.setValue(2)}><span style={{marginRight:5}}>show more</span>
                          <ButtonArrow width={15} height={15} fill={theme.palette.common.cyan}/>
                        </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button component={Link} to="/estimate" variant="contained" className={classes.estimateButton} onClick={() => props.setValue(5)}>Free estimate</Button>
            </Grid>
            

        </Grid>
    )
}

export default CallToAction
