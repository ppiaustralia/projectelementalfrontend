import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, browserHistory, Switch } from "react-router-dom"; // this comes from install npm react-router-dom
import Navbar from './components/Navbar/Navbar';
import Home from '../src/pages/home/Home';
import Chapter from '../src/pages/chapter/Chapter';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import LiveInOz from '../src/pages/liveinoz/Liveinoz';
import Blog from '../src/pages/blog/Blog';

// website nav pane
function App () { 
  
    return ( 
     <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/about' exact component={About} />
         <Route path='/liveinoz' exact component={LiveInOz} />
         <Route path='/blog' exact component={Blog} />
         <Route path='/contact' exact component={Contact} />
       </Switch>
     </Router>

      
      
    );
  
}

export default App;