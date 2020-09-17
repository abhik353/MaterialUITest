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
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {useTheme} from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    marginBottom: "3em",
    [theme.breakpoints.down("md")]:{
      marginBottom : "2em"
    },
    [theme.breakpoints.down("xs")]:{
      marginBottom : "1.5em"
    }
  },
  logo:{
    height: "5em",
    padding: "10px",
    [theme.breakpoints.down("md")]:{
      height: "4em"
    },
    [theme.breakpoints.down("xs")]:{
      height: "3.5em"
    }
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
    height: "30px",
    "&:hover":{
      backgroundColor: theme.palette.secondary.light
    }
  },
  logoContainer:{
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  menu:{
    background: theme.palette.common.cyan,
    color: "white",
    borderRadius: "0px"
  },
  menuitem:{
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon:{
    height: "40px",
    width: "40px"
  },
  drawerIconContainer:{
    "&:hover" : {
      backgroundColor: "transparent"
    },
    marginLeft: "auto"
  },
  drawer:{
    backgroundColor: theme.palette.common.cyan
  },
  drawerItem:{
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemSelected:{
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  appbar:{
    zIndex: theme.zIndex.modal + 1
  }
}))

const Header = ({value, setValue, selectedIndex, setSelectedIndex}) => {

  
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchor, setAnchor] = useState(null)
  const [openMenu, SetOpenMenu] = useState(false)
  

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = e => {
    setAnchor(e.currentTarget)
    SetOpenMenu(true )
  }

  const handleMenuItemClick = (e, i) =>{
    setAnchor(null)
    SetOpenMenu(false)
    setSelectedIndex(i)
  }

  const handleClose = e => {
    setAnchor(null)
    SetOpenMenu(false)
  }

  const menuOptions = [{name: "services", link:"/services", activeIndex: 1, selectedIndex: 0},
                       {name:"custom software dev", link: "/customSoftware", activeIndex: 1, selectedIndex: 1},
                       {name: "mobile app dev", link: "/mobileApps", activeIndex: 1, selectedIndex: 2},
                       {name: "website dev", link: "/websites", activeIndex: 1, selectedIndex: 3}
                      ]
  
  const routes = [{name: "Home", link : "/", activeIndex: 0},
                  {name: "services", link : "/services", 
                        activeIndex: 1, ariaOwns: anchor ? "simple-menu" : undefined, 
                        ariaPopup: anchor ? "true" : undefined, 
                        mouseOver: event => handleClick(event)},
                  {name: "info", link : "/info", activeIndex: 2},
                  {name: "about us", link : "/about", activeIndex: 3},
                  {name: "contact", link : "/contact", activeIndex: 4}
                 ]

  useEffect(()=>{   

    [...menuOptions, ...routes].forEach(route => {
      switch(window.location.pathname){
        case `${route.link}`:
          if(value !== route.activeIndex){
            setValue(route.activeIndex)
            if(route.selectedIndex && route.selectedIndex !== selectedIndex){
              setSelectedIndex(route.selectedIndex)
            }
          }
          break
        default:
          break
      }
    })
    
  },[value, menuOptions, selectedIndex, routes, setSelectedIndex, setValue])

    const tabs = (
      <Fragment>
        <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
          {routes.map((route, index) => (
            <Tab key={`${route}${index}`}
                 className={classes.tab} 
                 component={Link} 
                 to={route.link} 
                 label={route.name} 
                 aria-owns={route.ariaOwns} 
                 aria-haspopup={route.ariaPopup}
                 onMouseOver={route.mouseOver}/>            
          ))}
        </Tabs>
        <Button variant="contained" component={Link} to="/estimate" color="secondary" className={classes.button}>
          Test
                      </Button>
        <Menu id="simple-menu"
          classes={{ paper: classes.menu }}
          anchorEl={anchor} open={openMenu}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          elevation={0}
          style={{zIndex: 1302}}
          keepMounted
        >
          {menuOptions.map((option, i) => (
            <MenuItem key={`${option}${i}`} component={Link} to={option.link}
              classes={{ root: classes.menuitem }}
              onClick={(event) => { handleMenuItemClick(event, i); setValue(1); handleClose() }} selected={i === selectedIndex && value === 1}>
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    )

    const drawer = (
      <Fragment>
        <SwipeableDrawer disableBackdropTransition={!iOS} 
                         disableDiscovery={iOS} 
                         open={openDrawer} 
                         onClose={() => setOpenDrawer(false)}
                         onOpen={() => setOpenDrawer(true)}
                         classes={{paper: classes.drawer}}
                         >
                           <div className={classes.toolbarMargin}/>
                        <List disablePadding>
                          {routes.map(route => (
                            <ListItem key={`${route}.${route.activeIndex}`} 
                                      divider 
                                      button 
                                      component={Link} to={route.link} 
                                      selected={value === route.activeIndex} 
                                      onClick={()=> {setOpenDrawer(false); setValue(route.activeIndex)}}
                                      classes={{selected: classes.drawerItemSelected}}
                                      >
                              <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                            </ListItem>
                          ))}                          
                        </List>
        </SwipeableDrawer>
        <IconButton className={classes.drawerIconContainer} onClick={()=> setOpenDrawer(!openDrawer)}>
          <MenuIcon className={classes.drawerIcon}/>
        </IconButton>
      </Fragment>
    )
    return (
      <Fragment>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters>
                  <Button component={Link} to="/" className={classes.logoContainer} onClick={()=>setValue(0)}>                      
                    <img alt="main logo"  className={classes.logo} src={logo}/>
                  </Button>
                      <Typography variant="h5">Material UI test</Typography>
                      {matches ? drawer : tabs}  
                </Toolbar>
            </AppBar>
        </ElevationScroll>
      <div className={classes.toolbarMargin}/>
      </Fragment>
    )
}

export default Header
