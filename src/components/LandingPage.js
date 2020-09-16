import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import animationData from '../animations_1/landinganimation/data'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonArrow from '../components/ui/ButtonArrow'
const useStyles = makeStyles(theme => ({

}))

const LandingPage = () =>{
    const classes = useStyles()
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
            <Grid container direction="column">
              <Grid item>
                <Grid container direction = "row">
                  <Grid item>
                    <div>item 1</div>
                    <Grid container>
                      <Grid item>
                        <Button variant="contained">Estimate</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="outlined">show more
                          <ButtonArrow width={15} height={15} fill="red"/>
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <div><Lottie options={defaultOptions} height={"100%"} width={"100%"}/></div>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
            )
}

export default LandingPage
