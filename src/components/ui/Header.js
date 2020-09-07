import React, { Fragment, useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles} from '@material-ui/styles'
import logo from '../../assets/react.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo:{
    height: "5em",
    padding: "10px"
  },
  tabContainer:{
    marginLeft: 'auto'
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 15,
    marginLeft: "25px"
  },
  button:{
    ...theme.typography.estimate,
    borderRadius: "20px",
    marginLeft: "50px",
    marginRight: "25px",    
    height: "30px"
  },
  logoContainer:{
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}))

const Header = () => {

  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  useEffect(()=>{
    if(window.location.pathname === "/" && value !== 0){
      setValue(value)
    }
    else if (window.location.pathname === "/services" && value !== 1){
      setValue(value)
    }
    else if (window.location.pathname === "/info" && value !== 2){
      setValue(value)
    }
    else if (window.location.pathname === "/about" && value !== 3){
      setValue(value)
    }
    else if (window.location.pathname === "/contact" && value !== 4){
      setValue(value)
    }
    else if (window.location.pathname === "/estimate" && value !== 5){
      setValue(value)
    }
  },[value])
    return (
      <Fragment>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                  <Button component={Link} to="/" className={classes.logoContainer} onClick={()=>setValue(0)}>                      
                    <img alt="main logo"  className={classes.logo} src={logo}/>
                  </Button>
                      <Typography variant="h5">Material UI test</Typography>
                      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                        <Tab className={classes.tab} component={Link} to="/home" label = "HOME" />
                        <Tab className={classes.tab} component={Link} to ="/services" label = "SErVICES" />
                        <Tab className={classes.tab} component={Link} to="/info" label = "INFO" />
                        <Tab className={classes.tab} component={Link} to="/about" label = "ABOUT US" />
                        <Tab className={classes.tab} component={Link} to="/contact" label = "CONTACT" />
                      </Tabs>
                      <Button variant="contained" component={Link} to="/estimate" color="secondary" className={classes.button}>
                         Test
                      </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
      <div className={classes.toolbarMargin}/>
      </Fragment>
    )
}

export default Header
