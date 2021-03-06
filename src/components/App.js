import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/ui/Header'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Contact from './Contact';

function App() {
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const [value, setValue] = useState(0)

  return ( 
    <ThemeProvider theme={theme}>
      <Router>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch> 
          <Route exact path='/' component={ () => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/services' component={ () => <Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/customSoftware' component={ () => <CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/mobileApps' component={ () => <MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path='/info' component={()=> <div>info</div>} />
          <Route exact path='/about' component={()=> <div>about</div>} />
          <Route exact path='/contact' component={ () => <Contact setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path='/estimate' component={()=> <div>estimate</div>} />
        </Switch>
        <Footer  setValue={setValue}  setSelectedIndex={setSelectedIndex}/>
      </Router>
          {/*{[...new Array(100)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}*/}
            
    </ThemeProvider>
  );
}

export default App;
