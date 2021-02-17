import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // this comes from install npm react-router-dom
import Navbar from './components/Navbar/Navbar';
import Home from '../src/pages/home/Home';
import Chapter from '../src/pages/chapter/Chapter';
// import ACT from '../src/pages/chapter/ACT';
// import NSW from '../src/pages/chapter/NSW';
// import NT from '../src/pages/chapter/NT';
// import QL from '../src/pages/chapter/QL';
// import SA from '../src/pages/chapter/SA';
// import TA from '../src/pages/chapter/TA';
// import VIC from '../src/pages/chapter/VIC';
// import WA from '../src/pages/chapter/WA';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import LiveInOz from '../src/pages/liveinoz/Liveinoz';
import Blog from '../src/pages/blog/Blog';
import { FooterContainer } from './containers/footer'

// website nav pane
function App () { 
  
    return ( 
     <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/about' exact component={About} />
         <Route path='/chapter/:statename' exact component={Chapter} />   {/* the var for the state will be assigned to statename */}
         {/* <Route path= '/Australia-Capital-Territory' exact component={ACT}/>
         <Route path= '/New-South-Wales' exact component={NSW}/>
         <Route path= '/Northern-Territory' exact component={NT}/>
         <Route path= '/Queensland' exact component={QL}/>
         <Route path= '/Southern-Australia' exact component={SA}/>
         <Route path= '/Tasmania' exact component={TA}/>
         <Route path= '/Victoria' exact component={VIC}/>
         <Route path= '/Western-Australia' exact component={WA}/> */}
         <Route path='/liveinoz' exact component={LiveInOz} />
         <Route path='/blog' exact component={Blog} />
         <Route path='/contact' exact component={Contact} />
       </Switch>
       <FooterContainer />
     </Router>

      
      
    );
  
}

export default App;// 