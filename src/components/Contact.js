import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import background from '../assets_1/background.jpg'
import mobileBackground from '../assets_1/mobileBackground.jpg'
import phoneIcon from '../assets_1/phone.svg'
import emailIcon from '../assets_1/email.svg'
import airplane from '../assets_1/send.svg'
import ButtonArrow from './ui/ButtonArrow'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

const useStyles = makeStyles(theme => ({
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSze: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]:{
            backgroundImage: `url(${mobileBackground})`
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
        [theme.breakpoints.down("md")]:{
            marginLeft: 0,
            marginRight: 0
        }
    },
    showMoreButton:{
        ...theme.typography.showButton,    
        fontSize: "0.9rem",
        height: 45,
        width: 145
      },
    message:{
        border: `2px solid ${theme.palette.common.cyan}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.orange,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }, 
        [theme.breakpoints.down("sm")]:{
            height: 40,
            width: 225
        }   
    }
}))


const Contact = (props) => {
    const classes = useStyles()
    const theme = useTheme()

    const [name,setName] = useState('')

    const [email,setEmail] = useState('')
    const [emailHelper, setemailHelper] = useState('')

    const [phone,setPhone] = useState('')
    const [phoneHelper, setphoneHelper] = useState('')

    const [message,setMessage] = useState('')

    const [open,setOpen] = useState(false)

    const onChange = e => {
        let valid
        switch(e.target.id){
            case 'email':
                setEmail(e.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
                if(!valid){
                    setemailHelper("invalid email entered.Please check")
                }
                else {
                    setemailHelper("")
                }
                break
            case 'phone':
                setPhone(e.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)
                if(!valid){
                    setphoneHelper("invalid phone number entered.Please check")
                }
                else {
                    setphoneHelper("")
                }
                break
            default:
                break
        }
    }

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" alignItems="center" style={{marginBottom: matchesMD? "5em" : 0, marginTop : matchesSM ? "1em" : matchesMD? "5em" : 0}} lg={4} xl={3}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item> 
                            <Typography align={matchesMD? "center" : undefined} variant="h2" style={{ lineHeight: 1 }}>
                                Contact us
                            </Typography>
                            <Typography align={matchesMD? "center" : undefined}  variant="body1">
                                we are here to help
                            </Typography>
                        </Grid>
                        <Grid item container style={{marginTop:"2em"}}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ fontSize: "1rem" }}>
                                    <a href="tel:1111111111" style={{textDecoration:"none", color:"inherit"}}> xxx-xxx-xxx </a>
                        </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom:"2em"}}>
                            <Grid item>
                                <img src={emailIcon} alt="email" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ fontSize: "1rem" }}>
                                    <a href="mailto:abhinavk353.ak@gmail.com" style={{textDecoration:"none", color:"inherit"}}> xxxx@gmail.com </a>
                        </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ maxWidth: "20em" }}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Email" id="email" value={email} error={emailHelper.length !== 0} helperText={emailHelper} onChange={onChange} fullWidth />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Phone" id="phone" value={phone} error={phoneHelper.length !== 0} helperText={phoneHelper} onChange={onChange} fullWidth/>
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: "20em" }}>
                            <TextField InputProps={{ disableUnderline: true }} value={message} id="message" className={classes.message} onChange={(e) => setMessage(e.target.value)} multiline rows={10} fullWidth/>
                        </Grid>
                        <Grid item container justify="center" style={{ marginTop: "2em" }}>
                            <Button disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0} className={classes.sendButton} variant="contained" onClick={() => setOpen(true)}>Send message <img src={airplane} alt="send message" style={{ marginLeft: "1em" }} /></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Dialog style={{zIndex: 1302}} fullScreen={matchesXS} open={open} onClose={()=> setOpen(false)} PaperProps={{style:{paddingTop: matchesXS ? "1em" : "5em", paddingBottom:  matchesXS ? "1em" :"5em", paddingLeft:  matchesXS ? 0 :matchesSM ? "5em": matchesMD? "5em" : "10em", paddingRight:   matchesXS ? 0 :matchesSM ? "5em": matchesMD? "5em" : "10em"}}}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align="center">
                                Confirm message
                            </Typography>
                        </Grid>
                        <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Email" id="email" value={email} error={emailHelper.length !== 0} helperText={emailHelper} onChange={onChange} fullWidth />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Phone" id="phone" value={phone} error={phoneHelper.length !== 0} helperText={phoneHelper} onChange={onChange} fullWidth/>
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
                            <TextField InputProps={{ disableUnderline: true }} value={message} id="message" className={classes.message} onChange={(e) => setMessage(e.target.value)} multiline rows={10} fullWidth/>
                        </Grid>
                        <Grid item container direction={matchesSM ? "column": "row"} style={{marginTop :"2em"}} alignItems="center">
                            <Grid item>                                
                                <Button color="primary" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0} className={classes.sendButton} variant="contained" onClick={() => setOpen(true)}>Send message <img src={airplane} alt="send message" style={{ marginLeft: "1em" }} /></Button>
                            </Grid>
                        </Grid>
                </DialogContent>
            </Dialog>
            <Grid item container className={classes.background} justify={matchesMD ? "center":undefined} direction={matchesMD ? "column" : "row"} alignItems="center" lg={8} xl={9}>
                <Grid item style={{ marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit" }}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h2">
                                wonderful experience
                        </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="subtitle1">
                                subtitle 1
                        </Typography>
                            <Grid container justify={matchesMD ? "center" : undefined} item>
                                <Button component={Link} to="/about" variant="outlined" className={classes.showMoreButton} onClick={() => props.setValue(2)}><span style={{ marginRight: 5 }}>show more</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.cyan} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Button component={Link} to="/estimate" variant="contained" className={classes.estimateButton} onClick={() => props.setValue(5)}>Free estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact
